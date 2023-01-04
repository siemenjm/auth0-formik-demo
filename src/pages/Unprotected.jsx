import styles from './pages.module.css';

export default function Unprotected() {
  return (
    <main className={styles.main}>
      <h1>Unprotected Page</h1>
      <p className={styles.description}>
        This page is unprotected and can be viewed while you are not signed in.
      </p>
      <p className={styles.status}>
        You are currently <span>not signed in</span>.
      </p>
    </main>
  );
}
