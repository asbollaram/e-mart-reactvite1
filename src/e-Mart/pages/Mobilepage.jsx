import React from 'react';
import { mobileData } from '../../assets/data/mobiles';
import Navbar from '../compponets/Navbar';

const Mobilepage = () => {
  return (
    <>
      <Navbar />
      <div className="headingPage">
        <h3>Mobiles</h3>
      </div>
      <div className="mpageSction">
        {mobileData.map((item) => {
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
      ;
    </>
  );
};

export default Mobilepage;
