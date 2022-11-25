import { createSlice } from '@reduxjs/toolkit';
import { productDetailsState } from '../product-details/product-details-slice';
type ProductInBasket = productDetailsState;

export interface Basket {
  items: Array<ProductInBasket>;
  totalPrice: number;
  quantity: number;
  tax: number;
}
const initialState: Basket = {
  items: [],
  totalPrice: 0,
  quantity: 0,
  tax: 0,
};

interface putProductToBasket {
  payload: ProductInBasket;
}

interface handlePrice {
  payload: number;
}

interface handleQuantity {
  payload: number;
}
interface handleTax {
  payload: number;
}

interface updateBasket {
  payload: ProductInBasket[];
}

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket: (state: Basket, action: putProductToBasket) => {
      state.items.push(action.payload);
    },
    updatePrice: (state: Basket, action: handlePrice) => {
      state.totalPrice += action.payload;
    },
    setBasketPrice: (state: Basket, action: handlePrice) => {
      state.totalPrice = action.payload;
    },
    setBasketQuantity: (state: Basket, action: handleQuantity) => {
      state.quantity = action.payload;
    },
    setBasketTax: (state: Basket, action: handleTax) => {
      state.tax = action.payload;
    },
    eraseTotalValue: (state: Basket) => {
      state.totalPrice = 0;
    },
    updateBasket: (state: Basket, action: updateBasket) => {
      state.items = [...action.payload];
    },

    eraseCart: (state: Basket) => {
      state.items = [];
    },
  },
});

export const {
  addProductToBasket,
  eraseCart,
  updateBasket,
  updatePrice,
  eraseTotalValue,
  setBasketPrice,
  setBasketQuantity,
  setBasketTax,
} = BasketSlice.actions;
