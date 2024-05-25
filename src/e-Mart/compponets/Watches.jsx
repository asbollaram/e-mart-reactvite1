import React from 'react';
import { watchData } from '../../assets/data/watch';
console.log(watchData);

const Watches = () => {
  const firstImage = watchData.slice(0, 5);
  return (
    <>
      <div className="heading">
        <h2>Watches</h2>
      </div>
      <div className="mobileSection">
        {firstImage.map((item) => {
          return (
            <div className="imgDetails">
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>
      ;
    </>
  );
};

export default Watches;
