import { Dispatch } from 'redux';
import { Basket } from '../../../../store/features/basket/basket-slice';

export interface Props {
  basketSelector: Basket;
  selector: {
    size?: string;
    color?: string;
    price: number;
    allPrices: [];
    name: string;
    brand: string;
    id: string;
    gallery: string[];
    allColors?: [];
    allSizes?: [];
    inStock: boolean;
    quantity: number;
  };
  dispatch: Dispatch;
}
