import { Dispatch } from 'redux';

export interface Props {
  useParams?: { id: string };
  dispatch?: Dispatch;
  selector?: any;
  currency?: { value: string };
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
