# github action script

### 1. 빌드 및 git tag 푸시
```shell
$ npm run pre-release
```

### 2. 배포
github에서 release를 작성하면, publish가 진행됩니다.
(version : "2.빌드 및 git tag 푸시" 에서 생성된 version 사용)
```shell
# gh-cli 사용하는 경우
$ gh release create v1.2.3
```
