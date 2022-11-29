import { Basket } from '../../../../../store/features/basket/basket-slice';
import { Dispatch } from 'redux';

export interface Props {
  productID: string;
  category: string;
  className: string;
  basketSelector: Basket;
  dispatch: Dispatch;
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
  currency: { value: string };
}
