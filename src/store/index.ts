import { configureStore } from '@reduxjs/toolkit';
import { currencySlice } from './features/currency/currency-slice';
import {productDetailsSlice} from './features/product-details/product-details-slice';

export const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
    productDetails: productDetailsSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type SliceDispatch = typeof  store.dispatch;
