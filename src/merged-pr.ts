import { GithubScriptInput } from './types/github-script.type';

function isMainBranchPR(base: string) {
  return base === 'main';
}

function _deleteBranch(githubScript: GithubScriptInput) {
  try {
    const { head, base } = githubScript.context.payload.pull_request;
    const headRef: string = head?.ref;
    const baseRef: string = base?.ref;
    console.log(`Base Branch - ${baseRef}`);

    if (isMainBranchPR(baseRef)) {
      console.log(`Result - ${headRef} branch 삭제완료`);
      const { repo, owner } = githubScript.context.repo;

      // 주의: 삭제는 headRef(hotfix, feature branch)에 대해서만 해야합니다.
      const ref = `heads/${headRef}`;
      if (/(hotfix|feature)/.test(ref)) {
        return githubScript.github.rest.git.deleteRef({
          repo,
          owner,
          ref,
        });
      }
    }
    console.log(
      `Result - ${headRef} branch 삭제실패 (Reason: main PR이 아닙니다.)`,
    );
  } catch (err) {
    console.log('======= Branch 삭제 실패사유 (Start) =======');
    console.log(err);
    console.log('======= Branch 삭제 실패사유 (End) =======');
  }
}

export const deleteBranch = async (githubScript: GithubScriptInput) => {
  // delete ref
  await _deleteBranch(githubScript);
};
