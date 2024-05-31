import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../e-Mart/contextCart/ContextCart';
import { watchData } from '../assets/data/watch';
import Navbar from '../e-Mart/compponets/Navbar';

const WatchesCartDetails = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const watcheProduct = watchData.find((item) => item.id === id);

  return (
    <div>
      <Navbar />
      <div className="cartproductcontainer">
        <div className="cartHeading">
          <h2>Product Details</h2>
        </div>
        <div className="cartproductDetails">
          <div className="cartImage">
            <img src={watcheProduct.image} alt="Menfunshion" />
          </div>
          <div className="rightdis">
            <div className="cartName  space">
              <h1>{watcheProduct.brand}</h1>
            </div>
            <div className="cartModel space">
              <h3>{watcheProduct.model}</h3>
            </div>
            <div className="cartprice space">
              <h4>{watcheProduct.price}</h4>
            </div>
            <div className="cartDisc space">
              <p>{watcheProduct.description}</p>
              <button
                className="cartButton"
                onClick={() => addToCart(watcheProduct)}
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

export default WatchesCartDetails;
