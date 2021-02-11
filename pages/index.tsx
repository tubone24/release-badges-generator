import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/form'
import { useRecoilValue } from 'recoil'
import { RepoInfoUser, RepoInfoRepo, RepoInfoResultSvg } from '../store/repoInfo'
import * as React from "react";

const Home = () => {
  const user = useRecoilValue(RepoInfoUser)
  const repo = useRecoilValue(RepoInfoRepo)
  const resultSvgUrl = useRecoilValue(RepoInfoResultSvg)
  return (
    <div className={styles.container}>
      <Head>
        <title>Release Badges Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Release Badges Generator</h1>

        <p className={styles.description}>
          This is a Web App to create release version badges of GitHub repositories.
        </p>
        <code className={styles.code}>
          https://xxxx.app/releases.svg?user={user}&repo={repo}&gradient=4259f7,8bfaec
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
      </footer>
    </div>
  )
}

export default Home
