import { createSlice } from '@reduxjs/toolkit';

export interface productDetailsState {
  size: string;
  color: string;
  price: number;
  capacity: string;
}

const initialState: productDetailsState = {
  size: '',
  color: '',
  price: 0,
  capacity: '',
};

interface setColorDetails {
  payload: string;
}
interface setSizeDetails {
  payload: string;
}
interface setCapacityDetails {
  payload: string;
}

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setProductColor: (state: productDetailsState, action: setColorDetails) => {
      state.color = action.payload;
    },
    setProductSize: (state: productDetailsState, action: setSizeDetails) => {
      state.size = action.payload;
    },
    setCapacity: (state: productDetailsState, action: setCapacityDetails) => {
      state.capacity = action.payload;
    },
  },
});

export const { setProductColor, setProductSize, setCapacity } =
  productDetailsSlice.actions;
