import React from 'react';
import { furnitureData } from '../../assets/data/furniture';
import Navbar from '../compponets/Navbar';

const FurnituresPage = () => {
  return (
    <>
      <Navbar />
      <div className="headingPage">
        <h3>Furniture</h3>
      </div>
      <div className="mpageSction">
        {furnitureData.map((item) => {
          return (
            <>
              <div className="imageDetails">
                <div className="imgPage">
                  <img src={item.image} alt="Mobiles" />
                </div>
                <div className="disCription">
                  <span>
                    <b>{item.company}</b>,{item.model}
                  </span>

                  <span className="price">{item.price}</span>
                </div>
                <div className="dis">{item.description}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FurnituresPage;
