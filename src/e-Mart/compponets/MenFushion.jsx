import React from 'react';
import { menData } from '../../assets/data/men';
import { Link } from 'react-router-dom';
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
            <Link to="/menfashion">
              <div className="imgDetails">
                <img src={item.image} alt="image" />
              </div>
            </Link>
          );
        })}
      </div>
      ;
    </>
  );
};

export default MenFushion;
