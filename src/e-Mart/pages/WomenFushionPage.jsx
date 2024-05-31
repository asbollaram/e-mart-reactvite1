import React, { useState } from 'react';
import Navbar from '../compponets/Navbar';
import { womanData } from '../../assets/data/woman';
import { Link } from 'react-router-dom';

const WomenFushionPage = () => {
  const [womenSeleted, setWomenSeleted] = useState([]);
  //
  const womenseHandler = (womengo) => {
    if (womenSeleted.includes(womengo)) {
      setWomenSeleted(womenSeleted.filter((item2) => item2 !== womengo));
    } else {
      setWomenSeleted([...womenSeleted, womengo]);
    }
  };

  const filterWomenProduct =
    womenSeleted.length === 0
      ? womanData
      : womanData.filter((wmorange) => womenSeleted.includes(wmorange.brand));
  return (
    <>
      <Navbar />
      <div className="ProductPageContainer">
        <div className="leftFiletdata">
          {womanData.map((wmenf) => {
            return (
              <div className="checkBox">
                <label>
                  <input
                    type="checkbox"
                    className="checkBox"
                    checked={womenSeleted.includes(wmenf.brand)}
                    onChange={() => womenseHandler(wmenf.brand)}
                  />
                  {wmenf.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageContainer">
          <div className="headingPage">
            <h3>Women Fushion</h3>
          </div>
          <div className="mpageSction">
            {filterWomenProduct.map((item) => {
              return (
                <>
                  <div className="imageDetails">
                    <Link to={`/woman/${item.id}`}>
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

export default WomenFushionPage;
