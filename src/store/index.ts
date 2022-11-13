import { configureStore } from '@reduxjs/toolkit';
import { currencySlice } from './features/currency/currency-slice';
import { productDetailsSlice } from './features/product-details/product-details-slice';
import { BasketSlice } from './features/basket/basket-slice';
import { ModalSlice } from './features/modal/modal-slice';

export const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
    productDetails: productDetailsSlice.reducer,
    basket: BasketSlice.reducer,
    modal: ModalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type SliceDispatch = typeof store.dispatch;
