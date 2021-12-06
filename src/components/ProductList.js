import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const ProductList = (props) => {
  const deleteProduct = (productId) => {
    axios
      .delete('http://localhost:8000/api/product/' + productId)
      .then((res) => {
        props.removeFromDom(productId);
      });
  };
  return (
    <div>
      <h1>All Products:</h1>
      {props.productList[0] ? (
        <div>
          {props.productList.map((product, index) => {
            return (
              <div key={index}>
                <Link to={`/${product._id}`}>{product.title}</Link>
                <button
                  onClick={(e) => {
                    deleteProduct(product._id);
                  }}
                >
                  Delete Product
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default ProductList;
