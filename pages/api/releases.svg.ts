// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import gradientBadge from 'gradient-badge'

export interface Upload {
  login: string
  id: number
  node_id: string
  gravatar_id: string
  url: string
  avatar_url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Assets {
  url: string
  id: number
  node_id: string
  name: string
  label: string
  uploader: Upload[] | Upload
  content_type: string
  state: string
  size: number
  download_count: number
  created_at: string
  updated_at: string
  browser_download_url: string
}

export interface Release {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  author: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }
  node_id: string
  tag_name: string
  target_commitish: string
  name: string
  draft: boolean
  prerelease: boolean
  created_at: string
  published_at: string
  assets: Assets[] | Assets
  tarball_url: string
  zipball_url: string
  body: string
}

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const baseUrl = 'https://api.github.com/repos'
  const {
    query: { user, repo, gradient },
  } = req
  let gradients: string[]
  if (gradient !== void 0) {
    gradients = gradient.toString().split(',')
    if (gradients.length !== 2) {
      gradients = ['pink', 'F78642']
    }
  } else {
    gradients = ['pink', 'F78642']
  }
  const config = {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  }
  axios
    .get<Release[]>(`${baseUrl}/${user}/${repo}/releases`, config)
    .then((resp) => {
      if (resp.data.length === 0) {
        const svgString = gradientBadge({
          subject: 'Release',
          status: 'no tags',
          gradient: ['a6a6a6', 'a6a6a6'],
        })
        res.statusCode = 404
        res.setHeader('content-type', 'image/svg+xml')
        res.send(svgString)
        return
      }
      const releases = resp.data.filter((release) => !release.draft)
      if (releases.length !== 0) {
        const svgString = gradientBadge({
          subject: 'Release',
          status: releases[0].tag_name,
          gradient: gradients,
        })
        res.statusCode = 200
        res.setHeader('content-type', 'image/svg+xml')
        res.send(svgString)
      } else {
        res.statusCode = 404
        const svgString = gradientBadge({
          subject: 'Release',
          status: 'no definite release',
          gradient: ['a6a6a6', 'a6a6a6'],
        })
        res.setHeader('content-type', 'image/svg+xml')
        res.send(svgString)
      }
    })
    .catch((error) => {
      res.statusCode = 500
      const svgString = gradientBadge({
        subject: 'Release',
        status: error.toString(),
        gradient: ['ff0015', 'ff0015'],
      })
      res.setHeader('content-type', 'image/svg+xml')
      res.send(svgString)
    })
}

export default handler
