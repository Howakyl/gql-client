import React from 'react';
import { useMutation } from '@apollo/client';
import { RENDER_CATS } from '../graphql/queries/renderCats';
import { CREATE_CAT } from '../graphql/mutations/createCats';



const NewCat = () => {
  let input;
  const [createCat, ] = useMutation(CREATE_CAT);

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