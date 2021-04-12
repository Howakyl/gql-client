import { gql } from '@apollo/client';

export const RENDER_CATS = gql`
  query cats {
    cats {
      name
      id
    }
  }
`