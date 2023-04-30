import { FC } from 'react';

export interface IIcon {
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
}

export const ArrowLeftIcon: FC<IIcon> = ({ fill }) => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5 28.5L15.615 26.385L8.745 19.5H33V16.5H8.745L15.63 9.615L13.5 7.5L3 18L13.5 28.5Z"
        fill={fill ? fill : 'currentColor'}
      />
    </svg>
  );
};
