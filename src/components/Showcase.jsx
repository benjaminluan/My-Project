import React from "react";
import "./Showcase.css";
const Showcase = () => {
  let buttonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let total;

  return (
    <div id="showcase">
      <h2 className="showcase__header">From simple programs.</h2>
      <div className="calculator--container">
        <div className="calculator__background">
          <div className="calculator__display">
            <span>10</span>
          </div>
          <div className="calculator__buttons--container">
            <div className="calculator__buttons--left">
              <button className="calculator__button">AC</button>
              <button className="calculator__button">+/-</button>
              <button className="calculator__button">%</button>
              {buttonArray.map((num) => (
                <button className="calculator__button">{num}</button>
              ))}
              <button className="calculator__button zero">0</button>
              <button className="calculator__button decimal">.</button>
            </div>
            <div className="calculator__buttons--right">
              <button className="calculator__button">÷</button>
              <button className="calculator__button">×</button>
              <button className="calculator__button">-</button>
              <button className="calculator__button">+</button>
              <button className="calculator__button">=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
