import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="upperHeader">
        <h2>Not signed in</h2>
        <button type="submit">Sign In</button>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home Page</Link>
          </li>
          <li>
            <Link to={'unprotected-page'}>Unprotected Page</Link>
          </li>
          <li>
            <Link to={'protected-page'}>Protected Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
