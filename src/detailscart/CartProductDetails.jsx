import React from 'react';
import { mobileData } from '../assets/data/mobiles';
import { useParams } from 'react-router-dom';
import Navbar from '../e-Mart/compponets/Navbar';
import { useCart } from '../e-Mart/contextCart/ContextCart';

const CartProductDetails = () => {
  const { id } = useParams();

  const { addToCart, cartItems } = useCart();
  const product = mobileData.find((item) => item.id === id);

  console.log(id);
  return (
    <div>
      <Navbar />
      <div className="cartproductcontainer">
        <div className="cartHeading">
          <h2>Product Details</h2>
        </div>
        <div className="cartproductDetails">
          <div className="cartImage">
            <img src={product.image} alt="products" />
          </div>
          <div className="rightdis">
            <div className="cartName  space">
              <h1>{product.company}</h1>
            </div>
            <div className="cartModel space">
              <h3>{product.model}</h3>
            </div>
            <div className="cartprice space">
              <h4>{product.price}</h4>
            </div>
            <div className="cartDisc space">
              <p>{product.description}</p>
              <button className="cartButton" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductDetails;
