import React, { useState } from 'react';
import { furnitureData } from '../../assets/data/furniture';
import Navbar from '../compponets/Navbar';
import { Link } from 'react-router-dom';

const FurnituresPage = () => {
  const [selectedFurniture, setSelectedFurniture] = useState([]);

  const furnitureHandler = (chair) => {
    if (selectedFurniture.includes(chair)) {
      setSelectedFurniture(
        selectedFurniture.filter((item7) => item7 !== chair)
      );
    } else {
      setSelectedFurniture([...selectedFurniture, chair]);
    }
  };

  const filterFurniture =
    selectedFurniture.length === 0
      ? furnitureData
      : furnitureData.filter((furNair) =>
          selectedFurniture.includes(furNair.brand)
        );
  return (
    <>
      <Navbar />
      <div className="ProductPageContainer">
        <div className="leftFiletdata">
          <h4>Categories</h4>
          {furnitureData.map((itemm) => {
            return (
              <div className="checkBox">
                <label>
                  <input
                    type="checkbox"
                    className="checkBox"
                    checked={selectedFurniture.includes(itemm.brand)}
                    onChange={() => furnitureHandler(itemm.brand)}
                  />
                  {itemm.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageContainer">
          <div className="headingPage">
            <h3>Furniture</h3>
          </div>
          <div className="mpageSction">
            {filterFurniture.map((item) => {
              return (
                <>
                  <div className="imageDetails">
                    <Link to={`/furniture/${item.id}`}>
                      <div className="imgPage">
                        <img src={item.image} alt="Mobiles" />
                      </div>
                    </Link>
                    <div className="disCription">
                      <span>
                        <b>{item.company}</b>,{item.model}
                      </span>

                      <span className="price">{item.price}</span>
                    </div>
                    <div className="dis">{item.description}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FurnituresPage;
