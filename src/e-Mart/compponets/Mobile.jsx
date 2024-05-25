import React from 'react';
import { mobileData } from '../../assets/data/mobiles';
console.log(mobileData);

const Mobile = () => {
  const firstImage = mobileData.slice(0, 5);
  return (
    <>
      <div className="heading">
        <h2>Mobiles</h2>
      </div>
      <div className="mobileSection">
        {firstImage.map((item) => {
          return (
            <div className="imgDetails">
              <img src={item.image} alt="Mobile images" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mobile;
