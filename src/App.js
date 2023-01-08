import React, { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState(0);
  const [operand, setOperand] = useState(null);
  const [storedValue, setStoredValue] = useState(null);

  function handleNumberClick(event) {
    const value = event.target.value;
    displayValue === 0
      ? setDisplayValue(value)
      : setDisplayValue(displayValue + value);
  }

  function handleOperandClick(event) {
    const value = event.target.value;
    setOperand(value);
    setStoredValue(displayValue);
    setDisplayValue("0");
  }

  function equalsClickHandler() {
    let result;
    switch (operand) {
      case "+":
        result = parseFloat(storedValue) + parseFloat(displayValue);
        break;
      case "-":
        result = parseFloat(storedValue) - parseFloat(displayValue);
        break;
      case "*":
        result = parseFloat(storedValue) * parseFloat(displayValue);
        break;
      case "/":
        result = parseFloat(storedValue) / parseFloat(displayValue);
        break;
      default:
        result = displayValue;
    }

    setDisplayValue(result);
    setOperand(null);
    setStoredValue(null);
  }

  function invertClickHandler() {
    setDisplayValue(displayValue === 0 ? 0 : -displayValue);
  }

  function resetClickHandler() {
    setDisplayValue(0);
  }

  function percentClickHandler() {
    setDisplayValue(
      displayValue === 0 || isNaN(displayValue)
        ? displayValue
        : displayValue / 100
    );
  }

  function decimalClickHandler() {
    if (displayValue.includes(".")) {
      return; 
    }
    setDisplayValue(displayValue + ".");
  }

  return (
    <div className="calculator">
      <div className="calculator__display">
        <span>{displayValue}</span>
      </div>
      <div className="calculator__layout">
        <div className="calculator__layout-buttons">
          <button id="clear" className="operation" onClick={resetClickHandler}>
            CE
          </button>
          <button
            id="percentage"
            className="operation"
            onClick={percentClickHandler}
          >
            %
          </button>
          <button
            id="toggle"
            className="operation"
            onClick={invertClickHandler}
          >
            +/-
          </button>
          <button
            id="addition"
            className="operation"
            value="+"
            onClick={handleOperandClick}
          >
            +
          </button>

          <button
            id="seven"
            className="number"
            value="7"
            onClick={handleNumberClick}
          >
            7
          </button>
          <button
            id="eight"
            className="number"
            value="8"
            onClick={handleNumberClick}
          >
            8
          </button>
          <button
            id="nine"
            className="number"
            value="9"
            onClick={handleNumberClick}
          >
            9
          </button>
          <button
            id="subtraction"
            className="operation"
            value="-"
            onClick={handleOperandClick}
          >
            -
          </button>
          <button
            id="four"
            className="number"
            value="4"
            onClick={handleNumberClick}
          >
            4
          </button>
          <button
            id="five"
            className="number"
            value="5"
            onClick={handleNumberClick}
          >
            5
          </button>
          <button
            id="six"
            className="number"
            value="6"
            onClick={handleNumberClick}
          >
            6
          </button>
          <button
            id="multiply"
            className="operation"
            value="*"
            onClick={handleOperandClick}
          >
            *
          </button>
          <button
            id="one"
            className="number"
            value="1"
            onClick={handleNumberClick}
          >
            1
          </button>
          <button
            id="two"
            className="number"
            value="2"
            onClick={handleNumberClick}
          >
            2
          </button>
          <button
            id="three"
            className="number"
            value="3"
            onClick={handleNumberClick}
          >
            3
          </button>
          <button
            id="divide"
            className="operation"
            value="/"
            onClick={handleOperandClick}
          >
            /
          </button>

          <button
            id="zero"
            className="number"
            value="0"
            onClick={handleNumberClick}
          >
            0
          </button>
          <button 
            id="decimal" 
            className="number" 
            value="."
            onClick={decimalClickHandler}
            >
              .
          </button>
          <button
            id="equals"
            className="operation"
            value="="
            onClick={equalsClickHandler}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
