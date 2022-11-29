import { Dispatch } from 'redux';
import { productDetailsState } from '../../store/features/product-details/product-details-slice';

export interface Props {
  useParams: { id: string };
  dispatch: Dispatch;
  selector: productDetailsState;
  currency: { value: string };
}

export interface State {
  name: string;
  brand: string;
  colors: string[] | null;
  sizes: string[] | null;
  gallery: string[];
  description: string;
  price: [];
}
