import styles from './pages.module.css';

export default function Protected() {
  return (
    <main className={styles.main}>
      <h1>Protected Page</h1>
      <p className={styles.description}>
        This page is protected and can only be viewed while signed in.
      </p>
      <p className={styles.status}>
        You are currently <span>not signed in</span>.
      </p>
    </main>
  );
}
