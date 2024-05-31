import React, { useState } from 'react';
import Navbar from '../compponets/Navbar';
import { kitchenData } from '../../assets/data/kitchen';
import { Link } from 'react-router-dom';

const KitchenPage = () => {
  const [selectedKitchen, setSelectedKitchen] = useState([]);

  const changeKitchenHandler = (kitchend) => {
    if (selectedKitchen.includes(kitchend)) {
      setSelectedKitchen(selectedKitchen.filter((item6) => item6 !== kitchend));
    } else {
      setSelectedKitchen([...selectedKitchen, kitchend]);
    }
  };
  //

  const filterKitchenprodcts =
    selectedKitchen.length === 0
      ? kitchenData
      : kitchenData.filter((orange) => selectedKitchen.includes(orange.brand));
  return (
    <>
      <Navbar />
      <div className="ProductPageContainer">
        <div className="leftFiletdata">
          <h4>Categories</h4>
          {kitchenData.map((kiches) => {
            return (
              <div className="checkBox">
                <label>
                  <input
                    type="checkbox"
                    className="checkBox"
                    checked={selectedKitchen.includes(kiches.brand)}
                    onChange={() => changeKitchenHandler(kiches.brand)}
                  />
                  {kiches.brand}
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageContainer">
          <div className="headingPage">
            <h3>Kitchen</h3>
          </div>
          <div className="mpageSction">
            {filterKitchenprodcts.map((item) => {
              return (
                <>
                  <div className="imageDetails">
                    <Link to={`/kitchen/${item.id}`}>
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

export default KitchenPage;
