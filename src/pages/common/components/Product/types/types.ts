export interface Props {
  name: string;
  id: string;
  inStock: boolean;
  gallery: string[];
  currency: string;
  prices: number;
  category:string;
}

export interface State {
  isActive: boolean;
}
