import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { useParams, HashRouter, Routes, Route, Link} from 'react-router-dom';

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
const App = ()=> {
  //https://www.acme-api.com/api/products
  const [products, setProducts] = useState([])
  useEffect(()=> {
    fetch('https://www.acme-api.com/api/products')
    .then(response => response.json())
    .then(json => setProducts(json));
  }, []);
  return (
    <div>
      <h1>React Client Template</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products ({ products.length })</Link>
      </nav>
      <Routes>
        <Route path='/' element= { <div>Home</div> } />} />
        <Route path='/products' element={
          <Products products={ products }/>
        } />
        <Route path='/products/:id' element = {
          <Product products={ products }/>
        } />
      </Routes> 
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
