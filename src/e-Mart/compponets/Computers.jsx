import React from 'react';
import { computerData } from '../../assets/data/computers';
console.log(computerData);

const Computers = () => {
  const firstimage = computerData.slice(0, 5);
  return (
    <>
      <div className="heading">
        <h2>Computers</h2>
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

export default Computers;
