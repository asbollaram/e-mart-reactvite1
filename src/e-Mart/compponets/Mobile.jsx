import React from 'react';
import { mobileData } from '../../assets/data/mobiles';
import { Link } from 'react-router-dom';

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
            <Link to="/mobile">
              <div className="imgDetails">
                <img src={item.image} alt="Mobile images" />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Mobile;
