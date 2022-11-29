export interface ProductProps {
  name: string;
  id: string;
  inStock: boolean;
  gallery: string[];
  attributes?: [];
  currency: { value: string };
  prices: number;
  category: string;
  navigate: (arg: string) => void;
}

export interface State {
  isActive: boolean;
  attribute: boolean;
}
