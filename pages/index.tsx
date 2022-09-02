import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles["page-wrapper"]}>
      <Head>
        <title>Memos</title>
        <meta name="description" content="Open source knowledge base in 1 file." />
        <link rel="icon" href="/logo.webp" />
      </Head>

      <main className={styles.main}>
        <img className={styles.logo} src="/logo-full.webp" alt="logo-full" />
        <p className={styles.description}>An open source, self-hosted knowledge base that works with a SQLite db file.</p>
        <img className={styles.demo} src="/demo.png" alt="logo-full" />
        <ul className={styles["links-container"]}>
          <li>
            <a href="https://demo.usememos.com" className={styles.link}>
              Live Demo
            </a>
          </li>
          <li>
            <a href="https://github.com/usememos/memos" className={styles.link}>
              Source Code
            </a>
          </li>
          <li>
            <a href="https://t.me/+-_tNF1k70UU4ZTc9" className={styles.link}>
              Discuss in Telegram 👾
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
