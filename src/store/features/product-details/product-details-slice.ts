import { createSlice } from '@reduxjs/toolkit';

export interface productDetailsState {
    size : string;
    color : string
    price: number;
}

const initialState: productDetailsState = {
    size: '',
    color: '',
    price: 0,
};

interface setDetails {
    payload: productDetailsState;
}

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {
        setProductDetails: (state: productDetailsState, action: setDetails) => {
            state.color = action.payload.color;
            state.size = action.payload.size;
            state.price = action.payload.price;
        },
    },
});

export const { setProductDetails } = productDetailsSlice.actions;
