import React from 'react';
import { womanData } from '../../assets/data/woman';
import { Link } from 'react-router-dom';

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
            <Link to="/womanfashion">
              <div className="imgDetails">
                <img src={item.image} alt="image" />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default WomenDress;
