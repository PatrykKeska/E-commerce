import { configureStore } from '@reduxjs/toolkit';
import { currencySlice } from './features/currency/currency-slice';

export const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
