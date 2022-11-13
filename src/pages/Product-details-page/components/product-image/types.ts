import { RefObject } from 'react';

export interface Props {
  attributes?: string[];
  name?: string;
  useRef?: RefObject<HTMLElement>;
}

export interface State {
  mainPhoto: number;
  gallery: string[];
}
