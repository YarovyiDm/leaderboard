import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useWindowVirtualizer, type VirtualItem } from '@tanstack/react-virtual';
import { ROW_HEIGHT_ESTIMATE, VIRTUALIZER_OVERSCAN, LOAD_MORE_THRESHOLD } from '../constants/leaderboard';

type Params = {
    count: number;
    loadMore: () => void;
};

type Return = {
    listRef: RefObject<HTMLDivElement>;
    virtualItems: VirtualItem[];
    totalSize: number;
    scrollMargin: number;
};

export const useVirtualList = ({ count, loadMore }: Params): Return => {
    const listRef = useRef<HTMLDivElement>(null);
    const [scrollMargin, setScrollMargin] = useState(0);

    useLayoutEffect(() => {
        setScrollMargin(listRef.current?.offsetTop ?? 0);
    }, []);

    const virtualizer = useWindowVirtualizer({
        count,
        estimateSize: () => ROW_HEIGHT_ESTIMATE,
        overscan: VIRTUALIZER_OVERSCAN,
        scrollMargin,
    });

    const virtualItems = virtualizer.getVirtualItems();

    useEffect(() => {
        const lastItem = virtualItems[virtualItems.length - 1];
        if (!lastItem) return;
        if (lastItem.index >= count - 1 - LOAD_MORE_THRESHOLD) {
            loadMore();
        }
    }, [virtualItems, count, loadMore]);

    return {
        listRef,
        virtualItems,
        totalSize: virtualizer.getTotalSize(),
        scrollMargin,
    };
};
