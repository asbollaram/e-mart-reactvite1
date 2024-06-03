import React from 'react';
import { acData } from '../../assets/data/ac';
import { Link } from 'react-router-dom';
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
            <Link to="/ac">
              <div className="imgDetails">
                <img src={item.image} alt="Computer images" />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Aircondition;
