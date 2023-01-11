import { GithubScriptInput } from './types/github-script.type';

async function checkDeployTag(githubScript: GithubScriptInput) {
  const { ref } = githubScript.context.payload;
  console.log(ref);
  return ref.includes('/tags');
}

export const createRelease = async (githubScript: GithubScriptInput) => {
  const isDisabledRelease = await checkDeployTag(githubScript);
  if (isDisabledRelease) {
    return;
  }

  console.log('Enable Release');

  // github 에서 latest release 를 가져올 때, 확실히 신규로 생성된 release 를 가져올 수 있도록 delay 추가 (없으면 추측하기로는 timing 이슈 때문에 prev 버전을 최신으로 가져오는 상황이 발생함)
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve('');
    }, 3000),
  );
};
