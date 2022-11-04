import { createSlice } from '@reduxjs/toolkit';

export interface CurrencyState {
  value: string;
}

const initialState: CurrencyState = {
  value: '$',
};

interface setCurrency {
  payload: string;
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state: CurrencyState, action: setCurrency) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
