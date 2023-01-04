import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.upperHeader}>
        <h2>Not signed in</h2>
        <button className={styles.signButton} type="submit">
          Sign In
        </button>
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
