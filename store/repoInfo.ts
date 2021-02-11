import { atom } from 'recoil'

export const RepoInfoUser = atom({
  key: 'repoInfoUser',
  default: 'tubone24',
})

export const RepoInfoRepo = atom({
  key: 'repoInfoRepo',
  default: 'redump',
})

export const RepoInfoResultSvg = atom({
  key: 'repoInfoResultSvg',
  default: '',
})
