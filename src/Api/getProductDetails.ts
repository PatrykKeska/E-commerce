import {client} from '../setup/ApolloClient';
import {gql} from '@apollo/client';

const getProductDetails = async (productID: string) => {
    return await client.query({
        query: gql`
      query GetProductsDetails($input: String!) {
         product(id:$input){
    name
    brand
    gallery
    description
    prices{
        amount
        currency{
            label
            symbol
        }
    }
    brand
    inStock
    attributes{
        name
        items{
            value
            id

        }
    }
}
      }
    `,
        variables: {
            input: productID,
        },
    });
};


export {getProductDetails}

