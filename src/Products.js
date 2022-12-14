import React from 'react';
import { Link } from 'react-router-dom';


const Products = (props) => {
  const products = props.products;
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {
          products.map(product => {
            return (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>{ product.name }</Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default Products