import { memo, useCallback } from 'react';
import type { User } from '../../types';
import { Avatar } from '../Avatar';
import { formatLapTime } from '../../utils/time.ts';
import styles from './UserRow.module.css';

type UserRowProps = {
  user: User;
  rank: number;
  index: number;
  selected: boolean;
  onSelect: (index: number) => void;
}

export const UserRow = memo(function UserRow({
  user,
  rank,
  index,
  selected,
  onSelect,
}: UserRowProps) {
  const handleClick = useCallback(() => onSelect(index), [index, onSelect]);

  return (
    <div
      className={`${styles.row} ${selected ? styles.selected : ''}`}
      onClick={handleClick}
      aria-selected={selected}
    >
      <div className={`${styles.rankCell} ${selected ? styles.rankSelected : ''}`}>{rank}</div>
      <div className={styles.avatarCell}>
        <Avatar color={user.color} index={index} selected={selected} />
      </div>
      <div className={styles.infoCell}>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.stats}>
          <span className={styles.time}>{formatLapTime(user.time)}</span>
          <span className={styles.sep}> | </span>
          <span className={styles.speed}>{user.speed} км/ч</span>
        </div>
      </div>
    </div>
  );
});
