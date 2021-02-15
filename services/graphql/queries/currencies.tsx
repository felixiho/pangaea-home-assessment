import { gql } from '@apollo/client';

export const GET_ALL_CURRENCIES = gql`
  query Currency {
    currency
  }
`;

