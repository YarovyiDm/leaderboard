import { Color, type User } from '../types';
import { FIRST_NAMES, LAST_NAMES } from './names';

import {
  TOTAL_USERS,
  BASE_LAP_TIME_MS,
  LAP_TIME_VARIANCE_MS,
  MIN_GAP_MS,
  GAP_VARIANCE_MS,
  BASE_SPEED_KMH,
  SPEED_DECREASE_PER_RANK,
  SPEED_VARIANCE_KMH,
  MIN_SPEED_KMH,
} from '../constants/userGeneration';

const COLORS = [Color.RED, Color.GREEN, Color.BLUE] as const;

export const generateUsers = (count: number): User[] => {
  const users: User[] = [];

  let timeMs = BASE_LAP_TIME_MS + Math.floor(Math.random() * LAP_TIME_VARIANCE_MS);

  for (let i = 0; i < count; i++) {
    const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const speed = Math.max(
      MIN_SPEED_KMH,
      Math.round(BASE_SPEED_KMH - i * SPEED_DECREASE_PER_RANK + (Math.random() - 0.5) * SPEED_VARIANCE_KMH),
    );

    users.push({ name: `${firstName} ${lastName}`, color, speed, time: timeMs });

    timeMs += MIN_GAP_MS + Math.floor(Math.random() * GAP_VARIANCE_MS);
  }

  return users;
}

export const ALL_USERS: User[] = generateUsers(TOTAL_USERS);
