import React from 'react';
import Navbar from '../compponets/Navbar';
import { computerData } from '../../assets/data/computers';

const ComputerPage = () => {
  return (
    <>
      <Navbar />
      <div className="headingPage">
        <h3>Computers</h3>
      </div>
      <div className="mpageSction">
        {computerData.map((item) => {
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

export default ComputerPage;
