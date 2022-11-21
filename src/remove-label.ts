import { GithubScriptInput } from './types/github-script.type';

async function findOpenPr(githubScript: GithubScriptInput) {
  const { repo, owner } = githubScript.context.repo;
  const prList = await githubScript.github.rest.pulls.list({
    owner,
    repo,
  });
  console.log('--------------- 🖨 Get PR List ---------------');
  console.log('🔔 PR List: ', prList);

  const hasLabelPrList = prList.data.filter((head) => {
    return head.labels.some(
      (label) => ['alpha', 'staging'].indexOf(label.name) > -1,
    );
  });

  if (!hasLabelPrList.length) {
    return Promise.reject(
      'alpha, staging 라벨이 포함된 Pull Request가 없습니다.',
    );
  }

  return hasLabelPrList.map((pr) => pr.number);
}

// alpha, staging label 삭제
function removeLabels(githubScript: GithubScriptInput, prNumberList: number[]) {
  try {
    const { repo, owner } = githubScript.context.repo;
    console.log('--------------- 🗑 Remove Labels ---------------');
    console.log('🔔 Remove alpha/staging label');

    return Promise.allSettled(
      ['alpha', 'staging'].map((label) => {
        prNumberList.map((prNumber) => {
          githubScript.github.rest.issues.removeLabel({
            owner,
            repo,
            issue_number: prNumber,
            name: label,
          });
        });
      }),
    ).catch((err) => {
      console.log('PR의 라벨 삭제가 이미 진행되었습니다.');
      console.log(err);
    });
  } catch (err) {
    console.log('PR의 라벨 삭제가 이미 진행되었습니다.');
    console.log(err);
  }
}

export const removeLabel = async (githubScript: GithubScriptInput) => {
  console.log('-- Print Github Script Payload --');
  console.log(githubScript.context.payload);

  // Get pull request number list has alpha/staging label
  const prNumberList = await findOpenPr(githubScript);

  // Remove labels
  await removeLabels(githubScript, prNumberList);
};
