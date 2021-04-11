import React from 'react';
import {gql, useMutation } from '@apollo/client';

const CREATE_CAT = gql`
  mutation createCat($name: String!) {
    createCat(name: $name) {
      id
      name
    }
  }
`

const NewCat = () => {
  let input;
  const [createCat, _] = useMutation(CREATE_CAT);

  return (
    <form action=""
    onSubmit={e => {
      e.preventDefault();
      createCat({variables: {name: input.value} });
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