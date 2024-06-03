import React from 'react';
import { watchData } from '../../assets/data/watch';
import { Link } from 'react-router-dom';
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
            <Link to="/watches">
              <div className="imgDetails">
                <img src={item.image} alt="" />
              </div>
            </Link>
          );
        })}
      </div>
      ;
    </>
  );
};

export default Watches;
