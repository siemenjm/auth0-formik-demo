import styles from './pages.module.css';
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <p className={styles.description}>
        This is a simple React app that uses Auth0 for authorization and
        authentication, and Formik to handle forms.
      </p>
      <p className={styles.status}>
        You are currently <span>not signed in</span>.
      </p>
    </main>
  );
}
