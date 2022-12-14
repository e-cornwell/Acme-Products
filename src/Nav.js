
import React from 'react';
import { useLocation, Link} from 'react-router-dom';


const Nav = (props) => {
  const products = props.products;
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav>
    <Link to='/' className={ pathname === '/' ? 'selected' : '' }>Home</Link>
    <Link to='/products' className={ pathname.startsWith('/products') ? 'selected' : ''}>Products ({ products.length })</Link>
  </nav>
  );
};

export default Nav;
