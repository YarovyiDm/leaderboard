import { ALL_USERS } from './data/users';
import { Leaderboard } from './components/Leaderboard';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <Leaderboard users={ALL_USERS} />
    </div>
  );
}
