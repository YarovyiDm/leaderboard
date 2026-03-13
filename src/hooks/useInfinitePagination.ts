import { useCallback, useMemo, useRef, useState } from 'react';
import { LOAD_DELAY_MS } from '../constants/leaderboard';

type Params<T> = {
    items: T[];
    pageSize: number;
};

type Return<T> = {
    visibleItems: T[];
    visibleCount: number;
    hasMore: boolean;
    isLoading: boolean;
    loadMore: () => void;
};

export const useInfinitePagination = <T>({ items, pageSize }: Params<T>): Return<T> => {
    const [visibleCount, setVisibleCount] = useState(pageSize);
    const [isLoading, setIsLoading] = useState(false);
    const isLoadingRef = useRef(false);

    const visibleItems = useMemo(
        () => items.slice(0, visibleCount),
        [items, visibleCount],
    );

    const hasMore = visibleCount < items.length;

    const loadMore = useCallback(() => {
        if (isLoadingRef.current || !hasMore) return;

        isLoadingRef.current = true;
        setIsLoading(true);

        setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + pageSize, items.length));
            setIsLoading(false);
            isLoadingRef.current = false;
        }, LOAD_DELAY_MS);
    }, [hasMore, items.length, pageSize]);

    return { visibleItems, visibleCount, hasMore, isLoading, loadMore };
}
