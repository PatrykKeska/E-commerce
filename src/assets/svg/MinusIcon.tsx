import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

const MinusIcon = (props: Props) => (
  <svg
    width={17}
    height={1}
    viewBox='0 0 17 1'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M1 0.5H16'
      stroke='#1D1F22'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export { MinusIcon };
