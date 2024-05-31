import React from 'react';
import { useParams } from 'react-router';
import { useCart } from '../e-Mart/contextCart/ContextCart';
import { kitchenData } from '../assets/data/kitchen';
import Navbar from '../e-Mart/compponets/Navbar';

const KitchenCartDetails = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();

  const kitchenProduct = kitchenData.find((item) => item.id == id);

  return (
    <div>
      <Navbar />
      <div className="cartproductcontainer">
        <div className="cartHeading">
          <h2>Product Details</h2>
        </div>
        <div className="cartproductDetails">
          <div className="cartImage">
            <img src={kitchenProduct.image} alt="Menfunshion" />
          </div>
          <div className="rightdis">
            <div className="cartName  space">
              <h1>{kitchenProduct.brand}</h1>
            </div>
            <div className="cartModel space">
              <h3>{kitchenProduct.model}</h3>
            </div>
            <div className="cartprice space">
              <h4>{kitchenProduct.price}</h4>
            </div>
            <div className="cartDisc space">
              <p>{kitchenProduct.description}</p>
              <button
                className="cartButton"
                onClick={() => addToCart(kitchenProduct)}
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

export default KitchenCartDetails;
