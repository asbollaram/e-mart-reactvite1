import React from 'react';
import { womanData } from '../../assets/data/woman';

const WomenDress = () => {
  const firstimage = womanData.slice(0, 5);
  return (
    <>
      <div className="heading">
        <h2>Woman Fashion</h2>
      </div>
      <div className="mobileSection">
        {firstimage.map((item) => {
          return (
            <div className="imgDetails">
              <img src={item.image} alt="image" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WomenDress;
