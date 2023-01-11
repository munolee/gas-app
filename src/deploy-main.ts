import { GithubScriptInput } from './types/github-script.type';

/** * github action에서 Use workflow from(ref)을 Branch로 선택한 경우만 릴리즈 노트 생성 허용 */
async function checkDeployTag(githubScript: GithubScriptInput) {
  const { ref } = githubScript.context.payload;
  // Branch로 workflow를 진행할 경우 ref -> refs/heads/main
  // Tags로 workflow를 진행할 경우 ref -> refs/tags/v1.2.3
  return ref.includes('/heads');
}

export const createRelease = async (githubScript: GithubScriptInput) => {
  // ref를 Tags로 선택하여 배포하였을 경우 릴리즈 노트 생성을 실행하지 않도록 함 (Tags로 롤백하는 경우 예상)
  const isReleaseEnabled = await checkDeployTag(githubScript);
  if (!isReleaseEnabled) {
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
