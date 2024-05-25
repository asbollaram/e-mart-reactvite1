import React from 'react';
import { menData } from '../../assets/data/men';
console.log(menData);

const MenFushion = () => {
  const firstimage = menData.slice(0, 5);
  return (
    <>
      <div className="heading">
        <h2>Men Fashion</h2>
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
      ;
    </>
  );
};

export default MenFushion;
