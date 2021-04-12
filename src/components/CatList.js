import React from 'react';
import { useQuery, gql } from '@apollo/client';
import{ RENDER_CATS }from '../graphql/queries/renderCats';


// const RENDER_CATS = gql`
//   query cats {
//     cats {
//       name
//       id
//     }
//   }
// `

const CatList = () => {
  const { loading, error, data } = useQuery(RENDER_CATS);
  
  
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error :</p>
  }
  
  return data.cats.map((cat) => (
    <p key={cat.id}>{cat.name}</p>
  ))
} 

export default CatList;