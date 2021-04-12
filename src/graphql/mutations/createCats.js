import { gql } from '@apollo/client';

export const CREATE_CAT = gql`
  mutation createCat($name: String!) {
    createCat(name: $name) {
      id
      name
    }
  }
`