import { client } from '../setup/ApolloClient';
import { gql } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { setProductPrice } from '../store/features/product-details/product-details-slice';

const getProductDetails = async (productID: string) => {
  return await client.query({
    query: gql`
      query GetProductsDetails($input: String!) {
        product(id: $input) {
          name
          brand
          gallery
          description
          prices {
            amount
            currency {
              label
              symbol
            }
          }
          brand
          inStock
          attributes {
            name
            items {
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

export { getProductDetails, getProductPrice };

interface Currency {
  label: string;
  symbol: string;
}
interface PriceArr {
  amount: number;
  currency: Currency;
}

const getProductPrice = async (prices: PriceArr[], currency: string) => {
  return prices.filter((price) => price.currency.symbol === currency)[0];
};
