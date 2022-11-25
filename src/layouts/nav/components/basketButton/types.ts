import { Dispatch } from 'redux';
import { Basket } from '../../../../store/features/basket/basket-slice';
import { CurrencyState } from '../../../../store/features/currency/currency-slice';

export interface Props {
  dispatch: Dispatch;
  basketSelector: Basket;
  currency: CurrencyState;
}
