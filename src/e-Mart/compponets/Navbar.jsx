import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navSection">
        <div className="logo">
          <Link to="/">
            <h2>e-Mart</h2>
          </Link>
        </div>
        <div className="mainSearch">
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="autSeaction">
          <div className="loginSinup">Login/Singup</div>
          <div className="cart">Cart</div>
        </div>
      </div>
      <div className="NavbarContainer">
        <div className="menuBar">
          <ul>
            <li>
              <Link to="/mobile">Mobile</Link>
            </li>

            <li>
              <Link to="/computers">Computer</Link>
            </li>
            <li>
              <Link to="/menfashion">Men Fashion</Link>
            </li>
            <li>
              <Link to="/womanfashion">Woman Dress</Link>
            </li>
            <li>
              <Link to="/watches">Watches</Link>{' '}
            </li>
            <li>
              <Link to="/kitchen">Kitchen</Link>
            </li>
            <li>
              <Link to="/furniture">Furniture</Link>
            </li>
            <li>
              <Link to="/ac">Ac</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
