import React, { useState } from 'react';
import Navbar from '../compponets/Navbar';
import { acData } from '../../assets/data/ac';
import { Link } from 'react-router-dom';

const AirConditionPage = () => {
  const [selectedAir, setSelectedAir] = useState([]);

  const airHandler = (aircool) => {
    if (selectedAir.includes(aircool)) {
      setSelectedAir(selectedAir.filter((item8) => item8 !== aircool));
    } else {
      setSelectedAir([...selectedAir, aircool]);
    }
  };

  const filterAifproducts =
    selectedAir.length === 0
      ? acData
      : acData.filter((orange) => selectedAir.includes(orange.company));
  return (
    <>
      <Navbar />
      <div className="ProductPageContainer">
        <div className="leftFiletdata">
          <h4>Categories</h4>
          {acData.map((item) => {
            return (
              <div className="checkBox">
                <label>
                  <input
                    type="checkBox"
                    className="checkBox"
                    checked={selectedAir.includes(item.company)}
                    onChange={() => airHandler(item.company)}
                  />
                  {item.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageContainer">
          <div className="headingPage">
            <h3>Air ConditionPage</h3>
          </div>
          <div className="mpageSction">
            {filterAifproducts.map((item) => {
              return (
                <>
                  <div className="imageDetails">
                    <Link to={`/ac/${item.id}`}>
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

export default AirConditionPage;
