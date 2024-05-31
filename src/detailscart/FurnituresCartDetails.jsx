import React from 'react';
import { useParams } from 'react-router';
import { useCart } from '../e-Mart/contextCart/ContextCart';
import { furnitureData } from '../assets/data/furniture';
import Navbar from '../e-Mart/compponets/Navbar';

const FurnituresCartDetails = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();

  const furnitureProducts = furnitureData.find((item) => item.id == id);

  return (
    <div>
      <Navbar />
      <div className="cartproductcontainer">
        <div className="cartHeading">
          <h2>Product Details</h2>
        </div>
        <div className="cartproductDetails">
          <div className="cartImage">
            <img src={furnitureProducts.image} alt="Menfunshion" />
          </div>
          <div className="rightdis">
            <div className="cartName  space">
              <h1>{furnitureProducts.brand}</h1>
            </div>
            <div className="cartModel space">
              <h3>{furnitureProducts.model}</h3>
            </div>
            <div className="cartprice space">
              <h4>{furnitureProducts.price}</h4>
            </div>
            <div className="cartDisc space">
              <p>{furnitureProducts.description}</p>
              <button
                className="cartButton"
                onClick={() => addToCart(furnitureProducts)}
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

export default FurnituresCartDetails;
