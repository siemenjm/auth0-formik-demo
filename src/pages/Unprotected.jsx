import { useAuth0 } from '@auth0/auth0-react';
import styles from './pages.module.css';

export default function Unprotected() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <main className={styles.main}>
      <h1>Unprotected Page</h1>
      <p className={styles.description}>
        This page is unprotected and can be viewed while you are not signed in.
      </p>
      <p className={styles.status}>
        You are currently{' '}
        <span>
          {isAuthenticated ? `signed in as ${user.name}` : 'not signed in'}
        </span>
        .
      </p>
    </main>
  );
}
