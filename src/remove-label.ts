import { GithubScriptInput } from './types/github-script.type';

const removeAlphaLabel = (githubScript: GithubScriptInput) => {
  const { repo, owner } = githubScript.context.repo;

  githubScript.github.rest;
};

async function findOpenPr(githubScript: GithubScriptInput) {
  const { repo, owner } = githubScript.context.repo;
  const prList = await githubScript.github.rest.pulls.list({
    owner,
    repo,
  });
  console.log('--------------- 🖨 Get PR List ---------------');
  console.log('🔔 PR List: ', prList);

  const prNumber = prList.data.find((head) => {
    console.log(head.labels);
    // head.labels.find(() => 'alpha', 'staging');
  })?.number;

  return prNumber;
}

export const removeLabel = async (githubScript: GithubScriptInput) => {
  console.log('-- Print Github Script Payload --');
  console.log(githubScript.context.payload);

  // Get pull request number list has alpha/staging label
  const prNumber = await findOpenPr(githubScript);
};
