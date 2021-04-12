import React from 'react';
import {gql, useMutation, useQuery } from '@apollo/client';
import CatList from './CatList';

const CREATE_CAT = gql`
  mutation createCat($name: String!) {
    createCat(name: $name) {
      id
      name
    }
  }
`

const RENDER_CATS = gql`
  query cats {
    cats {
      name
      id
    }
  }
`

const NewCat = () => {
  let input;
  const [createCat, ] = useMutation(CREATE_CAT);
  const { loading, error, data } = useQuery(RENDER_CATS);

  return (
    <form action=""
    onSubmit={e => {
      e.preventDefault();
      createCat({variables: {name: input.value}, refetchQueries: [{query: RENDER_CATS}]});
      input.value = '';
      }}
    >
      <input 
        type="text"
        ref={node => {
          input = node;
        }}
      />
      <button type="submit">Add Cat</button>
    </form>
  )
}
export default NewCat;