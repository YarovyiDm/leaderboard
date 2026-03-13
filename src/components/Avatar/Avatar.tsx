import { memo } from 'react';
import { Color } from '../../types';
import { DEFAULT_USER_AVATAR_SIZE } from '../../constants/userGeneration';
import { AVATAR_VARIANTS, AVATAR_BG_COLORS } from './avatarVariants';

type AvatarProps = {
  color: Color;
  index: number;
  selected: boolean;
};

export const Avatar = memo(function Avatar({ color, index, selected }: AvatarProps) {
  const variant = AVATAR_VARIANTS[index % AVATAR_VARIANTS.length];

  return (
    <div
      style={{
        width: DEFAULT_USER_AVATAR_SIZE,
        height: DEFAULT_USER_AVATAR_SIZE,
        borderRadius: '50%',
        background: AVATAR_BG_COLORS[color] ?? '#1e2640',
        overflow: 'hidden',
        flexShrink: 0,
        boxShadow: selected
          ? '0 0 0 3px #ffffff, 0 0 0 5.5px #7c3aed'
          : '0 0 0 3px transparent, 0 0 0 5.5px transparent',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <svg
        viewBox="0 0 40 40"
        width={DEFAULT_USER_AVATAR_SIZE}
        height={DEFAULT_USER_AVATAR_SIZE}
        style={{ display: 'block' }}
        aria-hidden="true"
      >
        {variant}
      </svg>
    </div>
  );
});
