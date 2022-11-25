import { Dispatch } from 'redux';
import { Basket } from '../../../../store/features/basket/basket-slice';

export interface Props {
  dispatch: Dispatch;
  basketSelector: Basket;
}
