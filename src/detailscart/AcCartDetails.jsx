import React from 'react';
import Navbar from '../e-Mart/compponets/Navbar';
import { useCart } from '../e-Mart/contextCart/ContextCart';
import { useParams } from 'react-router';
import { acData } from '../assets/data/ac';

const AcCartDetails = () => {
  const { id } = useParams();

  const { addToCart, cartItems } = useCart();
  const acProduct = acData.find((item) => item.id === id);
  return (
    <div>
      <Navbar />
      <div className="cartproductcontainer">
        <div className="cartHeading">
          <h2>Product Details</h2>
        </div>
        <div className="cartproductDetails">
          <div className="cartImage">
            <img src={acProduct.image} alt="products" />
          </div>
          <div className="rightdis">
            <div className="cartName  space">
              <h1>{acProduct.company}</h1>
            </div>
            <div className="cartModel space">
              <h3>{acProduct.model}</h3>
            </div>
            <div className="cartprice space">
              <h4>{acProduct.price}</h4>
            </div>
            <div className="cartDisc space">
              <p>{acProduct.description}</p>
              <button
                className="cartButton"
                onClick={() => addToCart(acProduct)}
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

export default AcCartDetails;
