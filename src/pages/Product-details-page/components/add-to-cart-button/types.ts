import { Dispatch } from 'redux';

export interface Props {
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
  };
  dispatch: Dispatch;
}
