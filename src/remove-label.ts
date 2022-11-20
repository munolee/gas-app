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
      (label) => label.name === 'alpha' || label.name === 'staging',
    );
  });

  const prNumberList = hasLabelPrList.map((pr) => pr.number);

  console.log(prNumberList);

  if (!prNumberList.length) {
    return Promise.reject(
      'alpha, staging 라벨이 포함된 Pull Request가 없습니다.',
    );
  }

  return prNumberList;
}

// alpha, staging label만 삭제
function removeLabels(githubScript: GithubScriptInput, prNumber: number) {
  const { repo, owner } = githubScript.context.repo;
  console.log('--------------- 🗑 Remove Labels ---------------');
  console.log(`🔔 Remove labels to #${prNumber}`);

  return Promise.allSettled(
    ['alpha', 'staging'].map((label) =>
      githubScript.github.rest.issues.removeLabel({
        owner,
        repo,
        issue_number: prNumber,
        name: label,
      }),
    ),
  );
}

export const removeLabel = async (githubScript: GithubScriptInput) => {
  console.log('-- Print Github Script Payload --');
  console.log(githubScript.context.payload);

  // Get pull request number list has alpha/staging label
  const prNumber = await findOpenPr(githubScript);

  // removeLabels(githubScript, prNumber);
};
