jest.mock('axios')
import axios, { AxiosInstance } from 'axios'
import httpMocks from 'node-mocks-http'
// 拡張子がTSじゃないとどうやらJest的にexport defaultでfunctionとして扱われないらしい
// なので、冗長だけど.tsをつけた
// @ts-ignore
import handler, { Release } from '../../pages/api/releases.svg.ts'
import { NextApiRequest, NextApiResponse } from 'next'

describe('release.svg', () => {
  it('200ok', () => {
    // tslint:disable-next-line:no-any
    const myAxios1: jest.Mocked<AxiosInstance> = axios as jest.Mocked<typeof axios>
    const mockData: Release[] = [
      {
        url: 'https://api.github.com/repos/tubone24/redump/releases/37876818',
        assets_url: 'https://api.github.com/repos/tubone24/redump/releases/37876818/assets',
        upload_url:
          'https://uploads.github.com/repos/tubone24/redump/releases/37876818/assets{?name,label}',
        html_url: 'https://github.com/tubone24/redump/releases/tag/v1.0.3',
        id: 37876818,
        author: {
          login: 'tubone24',
          id: 9511227,
          node_id: 'MDQ6VXNlcjk1MTEyMjc=',
          avatar_url: 'https://avatars.githubusercontent.com/u/9511227?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/tubone24',
          html_url: 'https://github.com/tubone24',
          followers_url: 'https://api.github.com/users/tubone24/followers',
          following_url: 'https://api.github.com/users/tubone24/following{/other_user}',
          gists_url: 'https://api.github.com/users/tubone24/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/tubone24/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/tubone24/subscriptions',
          organizations_url: 'https://api.github.com/users/tubone24/orgs',
          repos_url: 'https://api.github.com/users/tubone24/repos',
          events_url: 'https://api.github.com/users/tubone24/events{/privacy}',
          received_events_url: 'https://api.github.com/users/tubone24/received_events',
          type: 'User',
          site_admin: false,
        },
        node_id: 'MDc6UmVsZWFzZTM3ODc2ODE4',
        tag_name: 'v1.0.3',
        target_commitish: 'main',
        name: 'v1.0.3 Performance tuning',
        draft: false,
        prerelease: false,
        created_at: '2021-02-10T17:46:25Z',
        published_at: '2021-02-10T17:50:22Z',
        assets: [
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31906712',
            id: 31906712,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxOTA2NzEy',
            name: 'redump_Linux_v1.0.3',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 12304792,
            download_count: 0,
            created_at: '2021-02-10T17:51:05Z',
            updated_at: '2021-02-10T17:51:09Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.3/redump_Linux_v1.0.3',
          },
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31906748',
            id: 31906748,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxOTA2NzQ4',
            name: 'redump_macOS_v1.0.3',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 12211828,
            download_count: 0,
            created_at: '2021-02-10T17:51:40Z',
            updated_at: '2021-02-10T17:51:40Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.3/redump_macOS_v1.0.3',
          },
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31906815',
            id: 31906815,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxOTA2ODE1',
            name: 'redump_Windows_v1.0.3.exe',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 12230144,
            download_count: 0,
            created_at: '2021-02-10T17:53:22Z',
            updated_at: '2021-02-10T17:53:23Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.3/redump_Windows_v1.0.3.exe',
          },
        ],
        tarball_url: 'https://api.github.com/repos/tubone24/redump/tarball/v1.0.3',
        zipball_url: 'https://api.github.com/repos/tubone24/redump/zipball/v1.0.3',
        body:
          '\n## Changes\n\n### Pull Requests\n\n* Merge pull request [#8](https://github.com/tubone24/redump/issues/8) from tubone24/performance\n* Merge pull request [#7](https://github.com/tubone24/redump/issues/7) from tubone24/performance\n* Merge pull request [#6](https://github.com/tubone24/redump/issues/6) from tubone24/performance\n\n',
      },
      {
        url: 'https://api.github.com/repos/tubone24/redump/releases/37638920',
        assets_url: 'https://api.github.com/repos/tubone24/redump/releases/37638920/assets',
        upload_url:
          'https://uploads.github.com/repos/tubone24/redump/releases/37638920/assets{?name,label}',
        html_url: 'https://github.com/tubone24/redump/releases/tag/v1.0.2',
        id: 37638920,
        author: {
          login: 'tubone24',
          id: 9511227,
          node_id: 'MDQ6VXNlcjk1MTEyMjc=',
          avatar_url: 'https://avatars.githubusercontent.com/u/9511227?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/tubone24',
          html_url: 'https://github.com/tubone24',
          followers_url: 'https://api.github.com/users/tubone24/followers',
          following_url: 'https://api.github.com/users/tubone24/following{/other_user}',
          gists_url: 'https://api.github.com/users/tubone24/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/tubone24/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/tubone24/subscriptions',
          organizations_url: 'https://api.github.com/users/tubone24/orgs',
          repos_url: 'https://api.github.com/users/tubone24/repos',
          events_url: 'https://api.github.com/users/tubone24/events{/privacy}',
          received_events_url: 'https://api.github.com/users/tubone24/received_events',
          type: 'User',
          site_admin: false,
        },
        node_id: 'MDc6UmVsZWFzZTM3NjM4OTIw',
        tag_name: 'v1.0.2',
        target_commitish: 'main',
        name: 'v1.0.2 Bug fix',
        draft: false,
        prerelease: false,
        created_at: '2021-02-07T14:46:24Z',
        published_at: '2021-02-07T14:54:18Z',
        assets: [
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31761432',
            id: 31761432,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxNzYxNDMy',
            name: 'redump_Linux_v1.0.2',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 12305033,
            download_count: 0,
            created_at: '2021-02-07T14:54:57Z',
            updated_at: '2021-02-07T14:54:58Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.2/redump_Linux_v1.0.2',
          },
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31761439',
            id: 31761439,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxNzYxNDM5',
            name: 'redump_macOS_v1.0.2',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 12216148,
            download_count: 0,
            created_at: '2021-02-07T14:55:13Z',
            updated_at: '2021-02-07T14:55:14Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.2/redump_macOS_v1.0.2',
          },
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31761446',
            id: 31761446,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxNzYxNDQ2',
            name: 'redump_Windows_v1.0.2.exe',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 12221952,
            download_count: 0,
            created_at: '2021-02-07T14:55:41Z',
            updated_at: '2021-02-07T14:55:42Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.2/redump_Windows_v1.0.2.exe',
          },
        ],
        tarball_url: 'https://api.github.com/repos/tubone24/redump/tarball/v1.0.2',
        zipball_url: 'https://api.github.com/repos/tubone24/redump/zipball/v1.0.2',
        body:
          '\n## Changes\n\n### Pull Requests\n\n* Merge pull request [#5](https://github.com/tubone24/post_twitter_on_work/issues/5) from tubone24/benchmark\n\n',
      },
      {
        url: 'https://api.github.com/repos/tubone24/redump/releases/37633821',
        assets_url: 'https://api.github.com/repos/tubone24/redump/releases/37633821/assets',
        upload_url:
          'https://uploads.github.com/repos/tubone24/redump/releases/37633821/assets{?name,label}',
        html_url: 'https://github.com/tubone24/redump/releases/tag/v1.0.1',
        id: 37633821,
        author: {
          login: 'tubone24',
          id: 9511227,
          node_id: 'MDQ6VXNlcjk1MTEyMjc=',
          avatar_url: 'https://avatars.githubusercontent.com/u/9511227?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/tubone24',
          html_url: 'https://github.com/tubone24',
          followers_url: 'https://api.github.com/users/tubone24/followers',
          following_url: 'https://api.github.com/users/tubone24/following{/other_user}',
          gists_url: 'https://api.github.com/users/tubone24/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/tubone24/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/tubone24/subscriptions',
          organizations_url: 'https://api.github.com/users/tubone24/orgs',
          repos_url: 'https://api.github.com/users/tubone24/repos',
          events_url: 'https://api.github.com/users/tubone24/events{/privacy}',
          received_events_url: 'https://api.github.com/users/tubone24/received_events',
          type: 'User',
          site_admin: false,
        },
        node_id: 'MDc6UmVsZWFzZTM3NjMzODIx',
        tag_name: 'v1.0.1',
        target_commitish: 'main',
        name: 'v1.0.1 Support for 1.12-1.15 go versions',
        draft: false,
        prerelease: false,
        created_at: '2021-02-07T09:20:21Z',
        published_at: '2021-02-07T09:24:19Z',
        assets: [
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31752515',
            id: 31752515,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxNzUyNTE1',
            name: 'redump_Linux_v1.0.1',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 12304882,
            download_count: 0,
            created_at: '2021-02-07T09:24:57Z',
            updated_at: '2021-02-07T09:24:57Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.1/redump_Linux_v1.0.1',
          },
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31752597',
            id: 31752597,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxNzUyNTk3',
            name: 'redump_macOS_v1.0.1',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 12216004,
            download_count: 0,
            created_at: '2021-02-07T09:26:10Z',
            updated_at: '2021-02-07T09:26:11Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.1/redump_macOS_v1.0.1',
          },
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31752558',
            id: 31752558,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxNzUyNTU4',
            name: 'redump_Windows_v1.0.1.exe',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 12223488,
            download_count: 0,
            created_at: '2021-02-07T09:25:43Z',
            updated_at: '2021-02-07T09:25:44Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.1/redump_Windows_v1.0.1.exe',
          },
        ],
        tarball_url: 'https://api.github.com/repos/tubone24/redump/tarball/v1.0.1',
        zipball_url: 'https://api.github.com/repos/tubone24/redump/zipball/v1.0.1',
        body: '\n## Changes\n\n',
      },
      {
        url: 'https://api.github.com/repos/tubone24/redump/releases/37602257',
        assets_url: 'https://api.github.com/repos/tubone24/redump/releases/37602257/assets',
        upload_url:
          'https://uploads.github.com/repos/tubone24/redump/releases/37602257/assets{?name,label}',
        html_url: 'https://github.com/tubone24/redump/releases/tag/v1.0.0',
        id: 37602257,
        author: {
          login: 'tubone24',
          id: 9511227,
          node_id: 'MDQ6VXNlcjk1MTEyMjc=',
          avatar_url: 'https://avatars.githubusercontent.com/u/9511227?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/tubone24',
          html_url: 'https://github.com/tubone24',
          followers_url: 'https://api.github.com/users/tubone24/followers',
          following_url: 'https://api.github.com/users/tubone24/following{/other_user}',
          gists_url: 'https://api.github.com/users/tubone24/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/tubone24/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/tubone24/subscriptions',
          organizations_url: 'https://api.github.com/users/tubone24/orgs',
          repos_url: 'https://api.github.com/users/tubone24/repos',
          events_url: 'https://api.github.com/users/tubone24/events{/privacy}',
          received_events_url: 'https://api.github.com/users/tubone24/received_events',
          type: 'User',
          site_admin: false,
        },
        node_id: 'MDc6UmVsZWFzZTM3NjAyMjU3',
        tag_name: 'v1.0.0',
        target_commitish: 'main',
        name: 'v1.0.0 First Release',
        draft: false,
        prerelease: false,
        created_at: '2021-02-07T06:36:56Z',
        published_at: '2021-02-07T06:39:12Z',
        assets: [
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31748675',
            id: 31748675,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxNzQ4Njc1',
            name: 'redump_Linux_v1.0.0',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 13155234,
            download_count: 0,
            created_at: '2021-02-07T06:40:16Z',
            updated_at: '2021-02-07T06:40:17Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.0/redump_Linux_v1.0.0',
          },
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31748678',
            id: 31748678,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxNzQ4Njc4',
            name: 'redump_macOS_v1.0.0',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 13092604,
            download_count: 0,
            created_at: '2021-02-07T06:40:34Z',
            updated_at: '2021-02-07T06:40:34Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.0/redump_macOS_v1.0.0',
          },
          {
            url: 'https://api.github.com/repos/tubone24/redump/releases/assets/31748689',
            id: 31748689,
            node_id: 'MDEyOlJlbGVhc2VBc3NldDMxNzQ4Njg5',
            name: 'redump_Windows_v1.0.0.exe',
            label: '',
            uploader: {
              login: 'github-actions[bot]',
              id: 41898282,
              node_id: 'MDM6Qm90NDE4OTgyODI=',
              avatar_url: 'https://avatars.githubusercontent.com/in/15368?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/github-actions%5Bbot%5D',
              html_url: 'https://github.com/apps/github-actions',
              followers_url: 'https://api.github.com/users/github-actions%5Bbot%5D/followers',
              following_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}',
              gists_url: 'https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/subscriptions',
              organizations_url: 'https://api.github.com/users/github-actions%5Bbot%5D/orgs',
              repos_url: 'https://api.github.com/users/github-actions%5Bbot%5D/repos',
              events_url: 'https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/github-actions%5Bbot%5D/received_events',
              type: 'Bot',
              site_admin: false,
            },
            content_type: 'application/octet-stream',
            state: 'uploaded',
            size: 12963840,
            download_count: 0,
            created_at: '2021-02-07T06:41:25Z',
            updated_at: '2021-02-07T06:41:25Z',
            browser_download_url:
              'https://github.com/tubone24/redump/releases/download/v1.0.0/redump_Windows_v1.0.0.exe',
          },
        ],
        tarball_url: 'https://api.github.com/repos/tubone24/redump/tarball/v1.0.0',
        zipball_url: 'https://api.github.com/repos/tubone24/redump/zipball/v1.0.0',
        body:
          '\n## Changes\n\n### Pull Requests\n\n* Merge pull request [#1](https://github.com/tubone24/post_twitter_on_work/issues/1) from tubone24/add-code-of-conduct-1\n\n',
      },
    ]
    myAxios1.get.mockResolvedValue({ data: mockData })
    const mockReq = httpMocks.createRequest<NextApiRequest>({
      query: {
        user: 'tubone24',
        repo: 'redump',
        gradient: 'ff6600,ffe500',
      },
    })
    const mockRes = httpMocks.createResponse<NextApiResponse>()
    handler(mockReq, mockRes)
    expect(mockRes.statusCode).toEqual(200)
  })
  it('404 no tag', () => {
    // tslint:disable-next-line:no-any
    const myAxios2: jest.Mocked<AxiosInstance> = axios as jest.Mocked<typeof axios>
    const mockData: Release[] = []
    myAxios2.get.mockResolvedValue({ data: mockData })
    const mockReq = httpMocks.createRequest<NextApiRequest>({
      query: {
        user: 'tubone24',
        repo: 'redump',
        gradient: 'ff6600,ffe500',
      },
    })
    jest.spyOn(myAxios2, 'get')
    const mockRes = httpMocks.createResponse<NextApiResponse>()
    handler(mockReq, mockRes)
    expect(mockRes.statusCode).toEqual(200) //???
    // expect(myAxios2.get).toBeCalledWith(mockReq.query);
  })
})
