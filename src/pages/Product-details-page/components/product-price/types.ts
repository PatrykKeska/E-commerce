import { Dispatch } from 'redux';
interface selector {
  price: number;
  size: string;
  color: string;
  capacity: string;
}
interface currency {
  value: string;
}
export interface Props {
  price?: [];
  dispatch?: Dispatch;
  selector?: selector;
  currency?: currency;
}
