import { GithubScriptInput } from './types/github-script.type';

async function checkDeployTag(githubScript: GithubScriptInput) {
  const { ref } = githubScript.context.payload;
  const _ref = ref.includes('/tags');

  console.log(ref, _ref);
}

export const createRelease = async (githubScript: GithubScriptInput) => {
  // const newTag = await generateNewTagFromLatestRelease(githubScript);
  // await creator(githubScript, newTag);
  await checkDeployTag(githubScript);

  // github 에서 latest release 를 가져올 때, 확실히 신규로 생성된 release 를 가져올 수 있도록 delay 추가 (없으면 추측하기로는 timing 이슈 때문에 prev 버전을 최신으로 가져오는 상황이 발생함)
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve('');
    }, 3000),
  );
};
