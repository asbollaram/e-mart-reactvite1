import React from 'react';
import Navbar from '../compponets/Navbar';
import { acData } from '../../assets/data/ac';

const AirConditionPage = () => {
  return (
    <>
      <Navbar />
      <div className="headingPage">
        <h3>Air ConditionPage</h3>
      </div>
      <div className="mpageSction">
        {acData.map((item) => {
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

export default AirConditionPage;
