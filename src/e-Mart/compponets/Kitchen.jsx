import React from 'react';
import { kitchenData } from '../../assets/data/kitchen';
import { Link } from 'react-router-dom';

const Kitchen = () => {
  const firstImage = kitchenData.slice(0, 5);
  return (
    <>
      <div className="heading">
        <h2>Kitchen</h2>
      </div>
      <div className="mobileSection">
        {firstImage.map((item) => {
          return (
            <Link to="/kitchen">
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

export default Kitchen;
