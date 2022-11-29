import { createSlice } from '@reduxjs/toolkit';
import { productDetailsState } from '../product-details/product-details-slice';
type ProductInBasket = productDetailsState;

export interface Basket {
  items: Array<ProductInBasket>;
  totalPrice: number;
  quantity: number;
  tax: number;
  isOpen: boolean;
  checkout: boolean;
}
const initialState: Basket = {
  items: [],
  totalPrice: 0,
  quantity: 0,
  tax: 0,
  isOpen: false,
  checkout: false,
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

interface OpenCloseCart {
  payload: boolean;
}
interface OpenCloseCheckout {
  payload: boolean;
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

    handleCartState: (state: Basket, action: OpenCloseCart) => {
      state.isOpen = action.payload;
    },
    handleCheckout: (state: Basket, action: OpenCloseCheckout) => {
      state.checkout = action.payload;
    },

    placeAnOrder: (state: Basket) => {
      state.items = [];
      state.totalPrice = 0;
      state.tax = 0;
      state.quantity = 0;
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
  handleCartState,
  handleCheckout,
  placeAnOrder,
} = BasketSlice.actions;
