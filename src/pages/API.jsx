import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { getProtectedData, getPublicData } from '../services/message.service';
import styles from './pages.module.css';

export default function API() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [publicData, setPublicData] = useState(null);
  const [protectedData, setProtectedData] = useState(null);

  async function getPublicMessage() {
    const { data, error } = await getPublicData();

    if (data) {
      setPublicData(data);
    }

    if (error) {
      setPublicData(error);
    }
  }

  useEffect(() => {
    getPublicMessage();
  }, []);

  useEffect(() => {
    async function getProtectedMessage() {
      const accessToken = await getAccessTokenSilently();
      const { data, error } = await getProtectedData(accessToken);

      if (data) {
        setProtectedData(data);
      }

      if (error) {
        setProtectedData(error);
      }
    }

    getProtectedMessage();
  }, [getAccessTokenSilently]);

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
      {publicData && <p>{publicData.text}</p>}
      {protectedData && <p>{protectedData.text}</p>}
    </main>
  );
}
