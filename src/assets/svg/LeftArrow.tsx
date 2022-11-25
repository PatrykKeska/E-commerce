import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

const LeftArrow = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect
      width={24}
      height={24}
      fill='black'
      fillOpacity={0.73}
    />
    <path
      d='M14.25 6.06857L8.625 11.6876L14.25 17.3066'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export { LeftArrow };
