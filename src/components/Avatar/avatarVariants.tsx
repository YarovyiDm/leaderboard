import type { ReactElement } from 'react';
import { Color } from '../../types';

const BODY_COLOR = '#8b93b0';
const HAIR_COLOR = '#5c6280';

export const AVATAR_VARIANTS: ReactElement[] = [
  <g key="0">
    <circle cx="20" cy="15" r="8.5" fill={BODY_COLOR} />
    <path
      d="M11.5 14 Q13 5.5 20 5.5 Q27 5.5 28.5 14 Q26.5 8.5 20 8.5 Q13.5 8.5 11.5 14Z"
      fill={HAIR_COLOR}
    />
    <path d="M7 40 Q7 27 20 24.5 Q33 27 33 40" fill={BODY_COLOR} />
  </g>,

  <g key="1">
    <circle cx="20" cy="15" r="8.5" fill={BODY_COLOR} />
    <path
      d="M11 13 Q11 5 20 5 Q29 5 29 13
         Q30 23 28 30 L26 32 Q23 27 20 27
         Q17 27 14 32 L12 30 Q10 23 11 13Z"
      fill={HAIR_COLOR}
    />
    <path d="M7 40 Q7 27 20 24.5 Q33 27 33 40" fill={BODY_COLOR} />
  </g>,

  <g key="2">
    <circle cx="20" cy="15" r="8.5" fill={BODY_COLOR} />
    <path
      d="M11.5 13 Q14 5 20 5 Q26 5 28.5 13
         L30 17 Q27.5 9 20 9 Q12.5 9 10 17Z"
      fill={HAIR_COLOR}
    />
    <path d="M7 40 Q7 27 20 24.5 Q33 27 33 40" fill={BODY_COLOR} />
  </g>,

  <g key="3">
    <circle cx="20" cy="15" r="8.5" fill={BODY_COLOR} />
    <path
      d="M11 14 Q11 6 20 5.5 Q29 6 29 14
         Q31 8.5 28 7 Q26 5 22 5.5
         Q20 4.5 18 5.5 Q14 5 12 7 Q9 8.5 11 14Z"
      fill={HAIR_COLOR}
    />
    <path d="M7 40 Q7 27 20 24.5 Q33 27 33 40" fill={BODY_COLOR} />
  </g>,
];

export const AVATAR_BG_COLORS: Record<Color, string> = {
  [Color.RED]: '#fce8ef',
  [Color.GREEN]: '#e6f4ea',
  [Color.BLUE]: '#e8eef8',
};
