export interface Props {
  useParams?: { id: string };
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
