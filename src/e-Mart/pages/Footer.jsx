import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="flist">
          <ul>
            <li>
              <Link to="/menfashion">Men</Link>
            </li>
            <li>
              <Link to="/womanfashion">Women</Link>
            </li>
            <li>
              <Link to="/computers">computers</Link>
            </li>
            <li>
              <Link to="/watches">watches</Link>
            </li>
            <li>
              <Link to="/furniture">furniture</Link>
            </li>
          </ul>
        </div>
        <div className="flist">
          <ul>
            <li>
              <Link to="/mobile">Mobile</Link>{' '}
            </li>
            <li>
              <Link to="/kitchen">kitchen</Link>
            </li>
            <li>
              <Link to="/ac">Ac</Link>
            </li>
            <li>
              <Link to="/watches">watches</Link>
            </li>
            <li>
              <Link to="/furniture">furniture</Link>
            </li>
          </ul>
        </div>
        <div className="flist">
          <ul>
            <li>
              <Link to="/mobile">Mobile</Link>{' '}
            </li>
            <li>
              <Link to="/kitchen">kitchen</Link>
            </li>
            <li>
              <Link to="/ac">Ac</Link>
            </li>
            <li>
              <Link to="/watches">watches</Link>
            </li>
            <li>
              <Link to="/furniture">furniture</Link>
            </li>
          </ul>
        </div>
        <div className="flogo">
          <h2>App available on</h2>
        </div>
      </div>
      <div className="copyRight">
        Copyrights ©2024 e-Mart. Build by ReactJs.
      </div>
    </div>
  );
};

export default Footer;
