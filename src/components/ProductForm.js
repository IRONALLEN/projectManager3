import React, { useState } from 'react';
import axios from 'axios';
const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/api/product', {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='container'>
        <div className='form-control'>
          <h1>Product Manager</h1>
          <p>
            <label>Title</label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} />
          </p>
          <p>
            <label>Price</label>
            <input type='text' onChange={(e) => setPrice(e.target.value)} />
          </p>
          <p>
            <label>Description</label>
            <input
              type='text'
              onChange={(e) => setDescription(e.target.value)}
            />
          </p>

          <input className='button' type='submit' />
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
