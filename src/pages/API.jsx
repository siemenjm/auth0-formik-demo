import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import styles from './pages.module.css';

const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

export default function API() {
  const { user, isAuthenticated } = useAuth0();
  const [publicData, setPublicData] = useState(null);

  async function getPublicData() {
    try {
      const response = await fetch(API_SERVER_URL + '/api/messages/public');
      const data = await response.json();

      setPublicData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPublicData();
  }, [isAuthenticated]);

  return (
    <main className={styles.main}>
      <h1>Protected API Page</h1>
      <p className={styles.description}>
        This page is not itself protected, but the API that is being called has
        public and protected endpoints.
      </p>
      <p className={styles.status}>
        You are currently{' '}
        <span>
          {isAuthenticated ? `signed in as ${user.name}` : 'not signed in'}
        </span>
        .
      </p>
      {publicData && publicData.text}
    </main>
  );
}
