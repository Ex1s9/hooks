"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>LearnHooks</h1>
        <p>Collection of custom React hooks for learning purposes</p>
      </main>
    </div>
  );
}
