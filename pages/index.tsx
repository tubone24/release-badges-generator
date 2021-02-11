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

const Home = () => {
  const user = useRecoilValue(RepoInfoUser)
  const repo = useRecoilValue(RepoInfoRepo)
  const gradient = useRecoilValue(RepoInfoSelectedGradient)
  const resultSvgUrl = useRecoilValue(RepoInfoResultSvg)
  return (
    <div className={styles.container}>
      <Head>
        <title>Release Badges Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>✨Release Badges Generator✨</h1>

        <p className={styles.description}>
          Easily create release version batches for GitHub repositories.
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
    </div>
  )
}

export default Home
