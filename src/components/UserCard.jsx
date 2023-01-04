import styles from './Header.module.css';

export default function UserCard({ user }) {
  return (
    <div className={styles.userCard}>
      <img src={user.picture} alt={user.name} className={styles.userImage} />
      <h2>{`Welcome, ${user.name}!`}</h2>
    </div>
  );
}
