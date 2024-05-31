import React from 'react';
import { useParams } from 'react-router-dom';
import { womanData } from '../assets/data/woman';
import Navbar from '../e-Mart/compponets/Navbar';

import { useCart } from '../e-Mart/contextCart/ContextCart';

const WomenAddtoCartDetails = () => {
  const { id } = useParams();
  //
  const { addToCart, cartItems } = useCart();

  const womanProduct = womanData.find((witem) => witem.id === id);

  return (
    <div>
      <Navbar />
      <div className="cartproductcontainer">
        <div className="cartHeading">
          <h2>Product Details</h2>
        </div>
        <div className="cartproductDetails">
          <div className="cartImage">
            <img src={womanProduct.image} alt="Woman fushion" />
          </div>
          <div className="rightdis">
            <div className="cartName  space">
              <h1>{womanProduct.brand}</h1>
            </div>
            <div className="cartModel space">
              <h3>{womanProduct.model}</h3>
            </div>
            <div className="cartprice space">
              <h4>{womanProduct.price}</h4>
            </div>
            <div className="cartDisc space">
              <p>{womanProduct.description}</p>
              <button
                className="cartButton"
                onClick={() => addToCart(womanProduct)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenAddtoCartDetails;
