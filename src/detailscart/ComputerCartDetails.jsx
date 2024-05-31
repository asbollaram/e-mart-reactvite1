import React from 'react';
import { useParams } from 'react-router-dom';
import { computerData } from '../assets/data/computers';
import Navbar from '../e-Mart/compponets/Navbar';

import { useCart } from '../e-Mart/contextCart/ContextCart';

const ComputerCartDetails = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  //
  const computerProduct = computerData.find((item) => item.id === id);
  return (
    <div>
      <Navbar />
      <div className="cartproductcontainer">
        <div className="cartHeading">
          <h2>Product Details</h2>
        </div>
        <div className="cartproductDetails">
          <div className="cartImage">
            <img src={computerProduct.image} alt="Menfunshion" />
          </div>
          <div className="rightdis">
            <div className="cartName  space">
              <h1>{computerProduct.brand}</h1>
            </div>
            <div className="cartModel space">
              <h3>{computerProduct.model}</h3>
            </div>
            <div className="cartprice space">
              <h4>{computerProduct.price}</h4>
            </div>
            <div className="cartDisc space">
              <p>{computerProduct.description}</p>
              <button
                className="cartButton"
                onClick={() => addToCart(computerProduct)}
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

export default ComputerCartDetails;
