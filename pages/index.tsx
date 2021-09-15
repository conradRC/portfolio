import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>conradcrm.dev</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.dev}>
            FRONTED-DEVELOPMENT
          </h2>
          <h1 className={styles.title}>
            ¡Hello! My name is Conrado
          </h1>
        </section>
        <section className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>About</h2>
          </a>
          <a href="/proyects" className={styles.card}>
            <h2>Proyects</h2>
          </a>
          <a href="#" className={styles.card}>
            <h2>Contact</h2>
          </a>
        </section>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
