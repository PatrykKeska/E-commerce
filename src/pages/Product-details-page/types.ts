export interface Props {
  useParams?: any;
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
