import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import axios from 'axios';

const Update = (props) => {
  const { id } = props;
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/product/' + id)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:8000/api/product/' + id, {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .then((res) => {
        navigate(`/${id}`);
      });
  };
  return (
    <div>
      <h1>Update a Product</h1>
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Price</label>
          <input
            type='text'
            name='price'
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Description</label>
          <input
            type='text'
            name='description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </p>
        <input type='submit' />
        <Link to={'/product'}>
          <input type='button' value='Home' />
        </Link>
      </form>
    </div>
  );
};

export default Update;
