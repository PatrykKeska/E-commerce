import { SliceDispatch } from '../../../../store';

export interface State {
  checked: boolean;
}

export interface SizePickerProps {
  attributes?: Array<string>;
  dispatch?: SliceDispatch;
  selector?: any;
}
