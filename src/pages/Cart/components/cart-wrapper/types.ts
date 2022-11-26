import {Basket} from '../../../../store/features/basket/basket-slice';
import {Dispatch} from 'redux';

export interface Props {
    basketSelector: Basket;
    currency: {
        value: string
    }
    dispatch: Dispatch
}