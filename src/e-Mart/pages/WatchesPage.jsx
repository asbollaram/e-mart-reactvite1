import React from 'react';
import { watchData } from '../../assets/data/watch';
import Navbar from '../compponets/Navbar';

const WatchesPage = () => {
  return (
    <>
      <Navbar />
      <div className="headingPage">
        <h3>Watches</h3>
      </div>
      <div className="mpageSction">
        {watchData.map((item) => {
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

export default WatchesPage;
