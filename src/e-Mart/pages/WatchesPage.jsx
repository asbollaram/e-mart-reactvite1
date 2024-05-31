import React, { useState } from 'react';
import { watchData } from '../../assets/data/watch';
import Navbar from '../compponets/Navbar';
import { Link } from 'react-router-dom';

const WatchesPage = () => {
  const [seletedWatches, setSeletecdWatches] = useState([]);
  //

  const changeWatchHandler = (gadi) => {
    if (seletedWatches.includes(gadi)) {
      setSeletecdWatches(seletedWatches.filter((item5) => item5 !== gadi));
    } else {
      setSeletecdWatches([...seletedWatches, gadi]);
    }
  };
  //

  const filterWatchesProducts =
    seletedWatches.length === 0
      ? watchData
      : watchData.filter((orange) => seletedWatches.includes(orange.brand));
  return (
    <>
      <Navbar />
      <div className="ProductPageContainer">
        <div className="leftFiletdata">
          <h4>Categories</h4>
          {watchData.map((times) => {
            return (
              <div className="checkBox">
                <label>
                  <input
                    type="checkbox"
                    className="checkBox"
                    checked={seletedWatches.includes(times.brand)}
                    onChange={() => changeWatchHandler(times.brand)}
                  />
                  {times.brand}
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageContainer">
          <div className="headingPage">
            <h3>Watches</h3>
          </div>
          <div className="mpageSction">
            {filterWatchesProducts.map((item) => {
              return (
                <>
                  <div className="imageDetails">
                    <Link to={`/watches/${item.id}`}>
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

export default WatchesPage;
