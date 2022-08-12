import React, { useState } from "react";
import "./Showcase.css";
const Showcase = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isOperator, setIsOperator] = useState(false);

  const handleClick = (input) => {
    if (total.isOperator === false) {
      setTotal((prevState) => {
        return { ...prevState, displayValue: input };
      });

      console.log(total);
    }
  };

  const handleOperator = (input) => {
    if (isOperator === false && currentValue === null) {
      setOperator(input);
      setIsOperator(false);
    } else {
      
    }

    console.log(total);
  };

  const buttonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div id="showcase">
      <div className="showcase--container">
        <h2 className="showcase__header">From simple programs.</h2>
        <div className="calculator--container">
          <div className="calculator__background">
            <div className="calculator__display">
              <span>{displayValue}</span>
            </div>
            <div className="calculator__buttons--container">
              <div className="calculator__buttons--left">
                <button
                  value={"CLEAR"}
                  className="calculator__button"
                  onClick={() => setTotal((total.displayValue = 0))}
                >
                  AC
                </button>
                <button
                  className="calculator__button"
                  onClick={(e) => handleClick(e.target.textContent)}
                >
                  +/-
                </button>
                <button
                  className="calculator__button"
                  onClick={(e) => handleClick(e.target.textContent)}
                >
                  %
                </button>
                {buttonArray.map((num) => (
                  <button
                    className="calculator__button gray"
                    onClick={(e) => handleClick(e.target.textContent)}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className="calculator__button zero gray"
                  onClick={(e) => handleClick(e.target.textContent)}
                >
                  0
                </button>
                <button
                  className="calculator__button gray"
                  onClick={(e) => handleClick(e.target.textContent)}
                >
                  .
                </button>
              </div>
              <div className="calculator__buttons--right">
                <button
                  className="calculator__button"
                  onClick={(e) => handleOperator(e.target.textContent)}
                >
                  &divide;
                </button>
                <button
                  className="calculator__button"
                  onClick={(e) => handleOperator(e.target.textContent)}
                >
                  &times;
                </button>
                <button
                  className="calculator__button"
                  onClick={(e) => handleOperator(e.target.textContent)}
                >
                  -
                </button>
                <button
                  className="calculator__button"
                  onClick={(e) => handleOperator(e.target.textContent)}
                >
                  +
                </button>
                <button
                  className="calculator__button"
                  onClick={(e) => handleOperator(e.target.textContent)}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
