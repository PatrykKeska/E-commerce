import { createSlice } from '@reduxjs/toolkit';
import { productDetailsState } from '../product-details/product-details-slice';
type ProductInBasket = productDetailsState;

interface Basket {
  items: Array<ProductInBasket>;
  totalPrice: number;
}
const initialState: Basket = {
  items: [],
  totalPrice: 0,
};

interface putProductToBasket {
  payload: ProductInBasket;
}
interface priceInterface {
  payload: number;
}

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket: (state: Basket, action: putProductToBasket) => {
      state.items.push(action.payload);
    },
    priceAdding: (state: Basket, action: priceInterface) => {
      state.totalPrice += action.payload;
    },
    priceSubtract: (state: Basket, action: priceInterface) => {
      state.totalPrice -= action.payload;
    },
  },
});

export const { addProductToBasket, priceAdding, priceSubtract } =
  BasketSlice.actions;
