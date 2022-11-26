import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

const ArrowIcon = (props: Props) => (
  <svg
    width={8}
    height={4}
    viewBox='0 0 8 4'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_4_9)'>
      <path
        d='M1 0.5L4 3.5L7 0.5'
        stroke='black'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_4_9'>
        <rect
          width={8}
          height={4}
          fill='white'
        />
      </clipPath>
    </defs>
  </svg>
);

export { ArrowIcon };
