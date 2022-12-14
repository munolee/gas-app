import { GithubScriptInput } from './types/github-script.type';

async function findOpenPr(githubScript: GithubScriptInput) {
  const { repo, owner } = githubScript.context.repo;
  const prList = await githubScript.github.rest.pulls.list({
    owner,
    repo,
  });
  console.log('--------------- ๐จ Get PR List ---------------');
  console.log('๐ PR List: ', prList);

  const hasLabelPrList = prList.data.filter((head) => {
    return head.labels.some(
      (label) => ['alpha', 'staging'].indexOf(label.name) > -1,
    );
  });

  if (!hasLabelPrList.length) {
    return Promise.reject(
      'alpha, staging ๋ผ๋ฒจ์ด ํฌํจ๋ Pull Request๊ฐ ์์ต๋๋ค.',
    );
  }

  return hasLabelPrList.map((pr) => pr.number);
}

// alpha, staging label ์ญ์ 
function removeLabels(githubScript: GithubScriptInput, prNumberList: number[]) {
  const { repo, owner } = githubScript.context.repo;
  console.log('--------------- ๐ Remove Labels ---------------');
  console.log('๐ Remove alpha/staging label');

  return Promise.allSettled(
    ['alpha', 'staging'].map((label) => {
      prNumberList.map((prNumber) => {
        githubScript.github.rest.issues
          .removeLabel({
            owner,
            repo,
            issue_number: prNumber,
            name: label,
          })
          .catch((err) => {
            console.log('PR์ ๋ผ๋ฒจ ์ญ์ ๊ฐ ์ด๋ฏธ ์งํ๋์์ต๋๋ค.');
            console.log(err);
          });
      });
    }),
  );
}

export const removeLabel = async (githubScript: GithubScriptInput) => {
  console.log('-- Print Github Script Payload --');
  console.log(githubScript.context.payload);

  // Get pull request number list has alpha/staging label
  const prNumberList = await findOpenPr(githubScript);

  // Remove labels
  await removeLabels(githubScript, prNumberList);
};
