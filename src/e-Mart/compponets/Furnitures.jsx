import React from 'react';
import { furnitureData } from '../../assets/data/furniture';
import { Link } from 'react-router-dom';

const Furnitures = () => {
  const firstImage = furnitureData.slice(0, 5);
  return (
    <>
      <div className="heading">
        <h2>Furnitures</h2>
      </div>
      <div className="mobileSection">
        {firstImage.map((item) => {
          return (
            <Link to="/furniture">
              <div className="imgDetails">
                <img src={item.image} alt="Computer images" />
              </div>
            </Link>
          );
        })}
      </div>
      ;
    </>
  );
};

export default Furnitures;
