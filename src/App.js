import React, { useState } from "react";
import Button from './Button'

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
    if (operand) {
      setOperand(value);
    } else {
      setOperand(value);
      setStoredValue(displayValue);
      setDisplayValue("0");
    }
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
          <Button onClick={resetClickHandler} className="operation" value="CE" />
          <Button onClick={percentClickHandler} className="operation" value="%" />
          <Button onClick={invertClickHandler} className="operation" value="+/-" />
          <Button onClick={handleOperandClick} className="operation" value="+" />
          <Button onClick={handleNumberClick} className="number" value="7" />
          <Button onClick={handleNumberClick} className="number" value="8" />
          <Button onClick={handleNumberClick} className="number" value="9" />
          <Button onClick={handleOperandClick} className="operation" value="-" />
          <Button onClick={handleNumberClick} className="number" value="4" />
          <Button onClick={handleNumberClick} className="number" value="5" />
          <Button onClick={handleNumberClick} className="number" value="6" />
          <Button onClick={handleOperandClick} className="operation" value="*" />
          <Button onClick={handleNumberClick} className="number" value="1" />
          <Button onClick={handleNumberClick} className="number" value="2" />
          <Button onClick={handleNumberClick} className="number" value="3" />
          <Button onClick={handleOperandClick} className="operation" value="/" />
          <Button onClick={handleNumberClick} className="number" value="0" />
          <Button onClick={decimalClickHandler} className="number" value="." />
          <Button onClick={equalsClickHandler} className="operation_equals" value="=" />
        </div>
      </div>
    </div>
  );
}

export default App;
