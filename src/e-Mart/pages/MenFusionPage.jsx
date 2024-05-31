import React, { useState } from 'react';
import Navbar from '../compponets/Navbar';
import { menData } from '../../assets/data/men';
import { Link } from 'react-router-dom';

const MenFusionPage = () => {
  const [menselected, setMenSelected] = useState([]);
  //

  const mcompanyHandler = (mengo) => {
    if (menselected.includes(mengo)) {
      setMenSelected(menselected.filter((item1) => item1 !== mengo));
    } else {
      setMenSelected([...menselected, mengo]);
    }
  };
  //
  const filtermenProduct =
    menselected.length === 0
      ? menData
      : menData.filter((menfilter) => menselected.includes(menfilter.brand));
  return (
    <>
      <Navbar />
      <div className="ProductPageContainer">
        <div className="leftFiletdata">
          {menData.map((mfusion) => {
            return (
              <div className="checkBox">
                <label>
                  <input
                    type="checkbox"
                    className="checkBox"
                    checked={menselected.includes(mfusion.brand)}
                    onChange={() => mcompanyHandler(mfusion.brand)}
                  />
                  {mfusion.brand}
                </label>
              </div>
            );
          })}
        </div>

        {/* page product body */}
        <div className="pageContainer">
          <div className="headingPage">
            <h3>Men Fusion</h3>
          </div>
          <div className="mpageSction">
            {filtermenProduct.map((item) => {
              return (
                <>
                  <div className="imageDetails">
                    <Link to={`/men/${item.id}`}>
                      <div className="imgPage">
                        <img src={item.image} alt="men fushion" />
                      </div>
                    </Link>
                    <div className="disCription">
                      <div>
                        <b>{item.brand}, </b>
                        <span>{item.model}</span>
                      </div>
                      <div className="priced">
                        <span className="price">{item.price}</span>
                      </div>
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

export default MenFusionPage;
