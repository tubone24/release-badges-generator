import { atom } from 'recoil'

export const RepoInfoUser = atom({
  key: 'repoInfoUser',
  default: 'tubone24',
})

export const RepoInfoRepo = atom({
  key: 'repoInfoRepo',
  default: 'release-badges-generator',
})

export const RepoInfoResultSvg = atom({
  key: 'repoInfoResultSvg',
  default: '',
})

export const RepoInfoSelectedGradient = atom(
  {
  key: 'RepoInfoSelectedGradient',
  default: '4259f7,8bfaec',
})
