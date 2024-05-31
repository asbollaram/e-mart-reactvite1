import React from 'react';
import { useCart } from './contextCart/ContextCart';
import Navbar from './compponets/Navbar';

const UserCart = () => {
  const { cartItems, addToCart } = useCart();
  return (
    <>
      <Navbar />
      <div className="cartItemsContainer">
        <h1>My Cart</h1>
        <div className="cartItemsProducts">
          <div className="leftCartDetails">
            {cartItems.map((item) => {
              return (
                <div className="cartItems">
                  <div className="cartimages">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cartimageDis">
                    <h3>{item.model}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="cartpname">
                    <h5>{item.price}</h5>
                  </div>
                  <div className="cartType">{item.category}</div>
                  <div className="removeCart">
                    <button>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rightCart">
            <h3>Promo code</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCart;
