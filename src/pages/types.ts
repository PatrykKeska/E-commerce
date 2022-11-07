export interface SingleProduct {
  name: string;
  id: string;
  inStock: boolean;
  gallery: string[];
  currency: string;
  category: string;
  prices: any;
}

export interface State {
  category: string;
  products: SingleProduct[];
}

export interface Currency {
  amount: number;
  currency: {
    label: string;
    symbol: string;
  };
}

export interface ApiProduct {
  name: string;
  category: string;
  id: string;
  inStock: boolean;
  gallery: string[];
  prices: any;
}

export interface Props {
  currency: string;
}
