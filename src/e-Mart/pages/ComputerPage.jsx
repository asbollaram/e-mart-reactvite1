import React, { useState } from 'react';
import Navbar from '../compponets/Navbar';
import { computerData } from '../../assets/data/computers';
import { Link } from 'react-router-dom';

const ComputerPage = () => {
  const [computerSelected, setComputerSelected] = useState([]);
  //
  const computerHandler = (mango) => {
    if (computerSelected.includes(mango)) {
      setComputerSelected(computerSelected.filter((item4) => item4 !== mango));
    } else {
      setComputerSelected([...computerSelected, mango]);
    }
  };
  const filterComputerProduct =
    computerSelected.length === 0
      ? computerData
      : computerData.filter((orange) =>
          computerSelected.includes(orange.company)
        );
  return (
    <>
      <Navbar />
      <div className="ProductPageContainer">
        <div className="leftFiletdata">
          {computerData.map((computer1) => {
            return (
              <div className="checkBox">
                <label>
                  <input
                    type="checkbox"
                    className="checkBox"
                    checked={computerSelected.includes(computer1.company)}
                    onChange={() => computerHandler(computer1.company)}
                  />
                  {computer1.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageContainer">
          <div className="headingPage">
            <h3>Computers</h3>
          </div>
          <div className="mpageSction">
            {filterComputerProduct.map((item) => {
              return (
                <>
                  <div className="imageDetails">
                    <Link to={`/computer/${item.id}`}>
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

export default ComputerPage;
