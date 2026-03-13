import { useCallback, useMemo, useState, type CSSProperties } from 'react';
import { User } from '../../types';
import { PAGE_SIZE } from '../../constants/leaderboard';
import { computeRankColWidth } from '../../utils/computeRankColWidth';
import { UserRow } from '../UserRow';
import { useInfinitePagination } from '../../hooks/useInfinitePagination';
import { useVirtualList } from '../../hooks/useVirtualList';
import { Loader } from '../Loader';
import styles from './Leaderboard.module.css';

type LeaderboardProps = {
    users: User[];
};

export const Leaderboard = ({ users }: LeaderboardProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const { visibleCount, visibleItems, isLoading, loadMore } = useInfinitePagination({
        items: users,
        pageSize: PAGE_SIZE,
    });

    const rankColWidth = useMemo(
        () => computeRankColWidth(visibleCount),
        [visibleCount],
    );

    const { listRef, virtualItems, totalSize, scrollMargin } = useVirtualList({
        count: visibleItems.length,
        loadMore,
    });

    const handleSelect = useCallback((index: number) => {
        setSelectedIndex((prev) => (prev === index ? null : index));
    }, []);

    return (
        <div className={styles.leaderboard}>
            <h1 className={styles.title}>Рейтинг</h1>
            <div
                ref={listRef}
                className={styles.list}
                style={{
                    '--rank-col-w': `${rankColWidth}px`,
                    height: `${totalSize}px`,
                    position: 'relative',
                } as CSSProperties}
            >
                {virtualItems.map((vItem) => (
                    <div
                        key={vItem.key}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            transform: `translateY(${vItem.start - scrollMargin}px)`,
                        }}
                    >
                        <UserRow
                            user={visibleItems[vItem.index]!}
                            rank={vItem.index + 1}
                            index={vItem.index}
                            selected={selectedIndex === vItem.index}
                            onSelect={handleSelect}
                        />
                    </div>
                ))}
            </div>
            {isLoading && <Loader />}
        </div>
    );
};
