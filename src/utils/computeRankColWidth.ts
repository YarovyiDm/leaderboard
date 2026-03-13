import { RANK_COL_PX_PER_DIGIT, RANK_COL_PADDING_PX } from '../constants/leaderboard';

export const computeRankColWidth = (maxRank: number): number => {
    const digits = String(maxRank).length;

    return digits * RANK_COL_PX_PER_DIGIT + RANK_COL_PADDING_PX;
}