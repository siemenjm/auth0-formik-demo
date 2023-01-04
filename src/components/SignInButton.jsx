import { useAuth0 } from '@auth0/auth0-react';
import styles from './Header.module.css';

export default function SignInButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()} className={styles.signButton}>
      Sign In
    </button>
  );
}
