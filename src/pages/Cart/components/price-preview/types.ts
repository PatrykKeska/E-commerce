import {Dispatch} from 'redux';

interface SinglePriceObject {
    amount: number;
    currency: {
        label: string,
        symbol: string,
    }

}

export interface Props {
    allPrices: SinglePriceObject[];
    currency: {value:string};
    dispatch: Dispatch
}