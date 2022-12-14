
import React from 'react';
import { useParams, HashRouter, Link} from 'react-router-dom';

const Product = (props)=> {
  const products = props.products
  const id = useParams().id;
  const product = products.find(product => product.id === id)
  if(!product){
    return null;
  }
  return (
    <div>
      <h1><Link to='/products'>{ product.name }</Link></h1>
      <p>
        {product.description}
      </p>
    </div>
  );
}

export default Product;