import React, { useState } from 'react';
import { mobileData } from '../../assets/data/mobiles';
import Navbar from '../compponets/Navbar';
import { Link } from 'react-router-dom';

const Mobilepage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  //

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? mobileData
      : mobileData.filter((orange) => selectedProduct.includes(orange.company));
  return (
    <>
      <Navbar />
      <div className="ProductPageContainer">
        <div className="leftFiletdata">
          <h4>Categories</h4>
          {mobileData.map((phone) => {
            return (
              <div className="checkBox">
                <label>
                  <input
                    type="checkbox"
                    className="checkBox"
                    checked={selectedProduct.includes(phone.company)}
                    onChange={() => companyHandler(phone.company)}
                  />
                  {phone.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageContainer">
          <div className="headingPage">
            <h3>Mobiles</h3>
          </div>
          <div className="mpageSction">
            {filteredProduct.map((item) => {
              return (
                <div>
                  <Link to={`/mobile/${item.id}`}>
                    <div className="pageImg">
                      <img src={item.image} alt="" />
                    </div>
                  </Link>
                  <div className="proModel">
                    {item.company}, {item.model}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilepage;
