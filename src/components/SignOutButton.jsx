import { useAuth0 } from '@auth0/auth0-react';
import styles from './Header.module.css';

export default function SignOutButton() {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className={styles.signButton}
    >
      Sign Out
    </button>
  );
}
