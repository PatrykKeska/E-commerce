import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

const PlusIcon = (props: Props) => (
  <svg
    width={17}
    height={17}
    viewBox='0 0 17 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8.5 1V16'
      stroke='#1D1F22'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M1 8.5H16'
      stroke='#1D1F22'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export { PlusIcon };
