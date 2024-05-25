import React from 'react';
import { acData } from '../../assets/data/ac';
console.log(acData);

const Aircondition = () => {
  const firstimage = acData.slice(0, 5);
  return (
    <>
      <div className="heading">
        <h2>Air Condition</h2>
      </div>
      <div className="mobileSection">
        {firstimage.map((item) => {
          return (
            <div className="imgDetails">
              <img src={item.image} alt="Computer images" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Aircondition;
