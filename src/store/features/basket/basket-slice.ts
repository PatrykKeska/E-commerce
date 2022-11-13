import { createSlice } from '@reduxjs/toolkit';
interface ProductInBasket{
    productName:string,
    productBrand:string,
    size:string,
    currency:string,
    color: string,
    price:number,
    quantity: number
}
interface Basket {
    items:Array<ProductInBasket>
}
const initialState:Basket = {
items: []
}


export const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{
        addProductToBasket: (state:Basket, action) => {
            state.items.push(action.payload)
        },
    }

})

export const {addProductToBasket} = BasketSlice.actions


// const initialProduct:ProductInBasket = {
//     productName:'',
//     productBrand:'',
//     size:'',
//     currency:'',
//     color: '',
//     price:0,
//     quantity: 0
// }