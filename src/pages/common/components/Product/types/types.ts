export interface ProductProps {
  name: string;
  id: string;
  inStock: boolean;
  gallery: string[];
  attributes?: [];
  currency: string;
  prices: number;
  category: string;
  navigate: any;
}

export interface State {
  isActive: boolean;
  attribute: boolean;
}
