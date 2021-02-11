import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/form'
import { useRecoilValue } from 'recoil'
import {
  RepoInfoUser,
  RepoInfoRepo,
  RepoInfoResultSvg,
  RepoInfoSelectedGradient,
} from '../store/repoInfo'
import * as React from 'react'
import GithubCorner from 'react-github-corner'

const Home = (): JSX.Element => {
  const user = useRecoilValue(RepoInfoUser)
  const repo = useRecoilValue(RepoInfoRepo)
  const gradient = useRecoilValue(RepoInfoSelectedGradient)
  const resultSvgUrl = useRecoilValue(RepoInfoResultSvg)
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Release Badges Generator</title>
        <meta property="og:title" content="Release Badges Generator" />
        <meta
          property="og:description"
          content="Easily create release version badges for GitHub repositories."
        />
        <meta name="keywords" content="GitHub,Release,Badges" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://release-badges-generator.vercel.app/" />
        <meta property="og:image" content="https://i.imgur.com/YbkLmVK.png" />
        <meta property="og:site_name" content="Release Badges Generator" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@meitante1conan" />
        <meta name="twitter:url" content="https://release-badges-generator.vercel.app/" />
        <meta name="twitter:title" content="Release Badges Generator" />
        <meta
          name="twitter:description"
          content="Easily create release version badges for GitHub repositories."
        />
        <meta name="twitter:image" content="https://i.imgur.com/YbkLmVK.png" />
        <meta property="fb:app_id" content="280941406476272" />
        <link rel="canonical" href="https://release-badges-generator.vercel.app/" />
        <link rel="apple-touch-icon" href={'https://i.imgur.com/bZvR3rW.png'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>✨Release Badges Generator✨</h1>

        <p className={styles.description}>
          Easily create release version badges for GitHub repositories.
        </p>
        <br />
        <code className={styles.code}>
          https://release-badges-generator.vercel.app/api/releases.svg?user={user}&repo={repo}
          &gradient={gradient}
        </code>
      </main>
      <img src={resultSvgUrl} alt="result svg" />
      <Form />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        <a href="https://github.com/tubone24" target="_blank" rel="noopener noreferrer">
          &nbsp; ©tubone24
        </a>
      </footer>
      <GithubCorner href="https://github.com/tubone24/release-badges-generator" />
    </div>
  )
}

export default Home
