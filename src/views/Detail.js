import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const Detail = (props) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get('http://localhost:8000/api/product/' + props.id).then((res) =>
      setProduct({
        ...res.data,
      }),
    );
  });
  return (
    <div>
      <div>
        <p>Title: {product.title}</p>
        <p>Price: {'$ ' + product.price}</p>
        <p>Description: {product.description}</p>
      </div>
      <Link to={'/product'}>
        <input type='button' value=' <= Products' />
      </Link>
      <Link to={'/product/' + props.id + '/edit'}>
        <input type='button' value='Edit' />
      </Link>
    </div>
  );
};
export default Detail;
