import { SliceDispatch } from '../../../../store';

export interface State {
  checked: boolean;
}

interface Selector {
  price: number;
  size: string;
  color: string;
}

export interface ColorPickerProps {
  attributes?: Array<string>;
  dispatch?: SliceDispatch;
  selector?: Selector;
  basketSelector?: Selector;
}
