import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

export default function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <header>
      <div className={styles.upperHeader}>
        {isLoading ? (
          <h2>Signing in...</h2>
        ) : (
          <>
            {isAuthenticated ? (
              <>
                <h2>Signed In</h2>
                <SignOutButton />
              </>
            ) : (
              <>
                <h2>Not signed in</h2>
                <SignInButton />
              </>
            )}
          </>
        )}
      </div>
      <nav className={styles.lowerHeader}>
        <ul>
          <li>
            <Link to={'/'} className={styles.navLink}>
              Home Page
            </Link>
          </li>
          <li>
            <Link to={'unprotected-page'} className={styles.navLink}>
              Unprotected Page
            </Link>
          </li>
          <li>
            <Link to={'protected-page'} className={styles.navLink}>
              Protected Page
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
