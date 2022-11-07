import { client } from '../setup/ApolloClient';
import { gql } from '@apollo/client';
import { ApiProduct, Currency } from '../pages/common/hoc/types/types';

const getProducts = async (category: string) => {
  return await client.query({
    query: gql`
      query GetProducts($input: String!) {
        category(input: { title: $input }) {
          name
          products {
            name
            id
            inStock
            attributes {
              id
            }
            category
            gallery
            prices {
              currency {
                label
                symbol
              }
              amount
            }
          }
        }
      }
    `,
    variables: {
      input: category,
    },
  });
};

const filterCurrency = async (products: any, currency: string) => {
  return await products.data.category.products.map((prod: ApiProduct) => {
    const productObj: ApiProduct = {
      ...prod,
      prices: prod.prices.filter(
        (item: Currency) => item.currency.symbol === `${currency}`,
      )[0],
    };
    return productObj;
  });
};

export { getProducts, filterCurrency };
