import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
  const [productList, setProductList] = useState({});
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/product')
      .then((res) => setProductList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (productId) => {
    setProductList(productList.filter((product) => product._id !== productId));
  };
  return (
    <div>
      <ProductForm />
      <hr />
      <ProductList removeFromDom={removeFromDom} productList={productList} />
    </div>
  );
};

export default Main;
