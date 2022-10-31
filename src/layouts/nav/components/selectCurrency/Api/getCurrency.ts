import {client} from '../../../../../setup/ApolloClient';
import {gql} from '@apollo/client';

const getCurrency = async () => {
    return await client.query({
        query: gql`
        query GetData {
          currencies {
            symbol
            label
          }
        }
      `,
    });
};


export {getCurrency}