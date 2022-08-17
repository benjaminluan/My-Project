import React, { useState } from "react";
import "./Showcase.css";
const Showcase = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [isOperator, setIsOperator] = useState(false);
  const [activeOperatorClass, setActiveOperatorClass] = useState(null);

  // Operator is now false, Operator is +, Current Value = 20, DisplayValue = 20.

  const handleClick = (input) => {
    if (activeOperatorClass != null) {
      setCurrentValue(displayValue);
      setDisplayValue(input);
      setActiveOperatorClass(null);
    } else if (displayValue === 0) {
      setDisplayValue(input);
    } else {
      setDisplayValue(displayValue + input);
    }
  };

  const handleOperator = (input) => {
    if (isOperator === true && !operator) {
      setDisplayValue(eval(`${currentValue}${operator}${displayValue}`));
      setCurrentValue(eval(`${currentValue}${operator}${displayValue}`));
      setOperator(input);
    } else if (isOperator === false) {
      setOperator(input);
      setIsOperator(true);
    } else if (operator === operator) {
      setIsOperator(false);
      setOperator(null);
    }
  };

  const handleEqualOperator = () => {
    if (operator != null) {
      setDisplayValue(eval(`${currentValue}${operator}${displayValue}`));
      setOperator(null);
      setIsOperator(false);
      setCurrentValue(0);
    }
  };

  const handleActiveOperatorClass = (input) => {
    if (
      activeOperatorClass === activeOperatorClass &&
      activeOperatorClass != null
    ) {
      setActiveOperatorClass(null);
    } else setActiveOperatorClass(input);
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
                  onClick={() => {
                    setDisplayValue(0);
                    setCurrentValue(null);
                    setActiveOperatorClass(null);
                    setOperator(null);
                    setIsOperator(false);
                  }}
                >
                  AC
                </button>
                <button
                  className="calculator__button"
                  onClick={() => {
                    setDisplayValue(displayValue * -1);
                  }}
                >
                  +/-
                </button>
                <button
                  className="calculator__button"
                  onClick={() => setDisplayValue(displayValue / 100)}
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
                  onClick={(e) => {
                    displayValue - Math.floor(displayValue) == 0
                      ? handleClick(e.target.textContent)
                      : console.log("nope there's a decimal!");
                  }}
                >
                  .
                </button>
              </div>
              <div className="calculator__buttons--right">
                <button
                  className={
                    "calculator__button" +
                    (activeOperatorClass === "divide" ? " active" : "")
                  }
                  onClick={(e) => {
                    handleOperator("/");
                    handleActiveOperatorClass("divide");
                  }}
                >
                  &divide;
                </button>
                <button
                  className={
                    "calculator__button" +
                    (activeOperatorClass === "multiply" ? " active" : "")
                  }
                  onClick={(e) => {
                    handleOperator("*");
                    handleActiveOperatorClass("multiply");
                  }}
                >
                  &times;
                </button>
                <button
                  className={
                    "calculator__button" +
                    (activeOperatorClass === "subtract" ? " active" : "")
                  }
                  onClick={(e) => {
                    handleOperator(e.target.textContent);
                    handleActiveOperatorClass("subtract");
                  }}
                >
                  -
                </button>
                <button
                  className={
                    "calculator__button" +
                    (activeOperatorClass === "add" ? " active" : "")
                  }
                  onClick={(e) => {
                    handleOperator(e.target.textContent);
                    handleActiveOperatorClass("add");
                  }}
                >
                  +
                </button>
                <button
                  className={"calculator__button"}
                  onClick={(e) => {
                    handleEqualOperator(e.target.textContent);
                    handleActiveOperatorClass("equal");
                  }}
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
