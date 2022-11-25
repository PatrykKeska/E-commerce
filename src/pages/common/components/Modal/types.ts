import { Dispatch } from 'redux';
import { Basket } from '../../../../store/features/basket/basket-slice';

export interface Props {
  modalSelector: { isOpen: boolean; title: string; message: string };
  dispatch: Dispatch;
  basketSelector: Basket;
}
