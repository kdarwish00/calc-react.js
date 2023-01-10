import React, { useState } from "react";
import Button from './Button'

function App() {
  const [displayValue, setDisplayValue] = useState(0);
  const [operand, setOperand] = useState(null);

  function handleNumberClick(event) {
    const value = event.target.value;
    if (operand) {
      // Concatenate the operand and the next input value together
      setDisplayValue(`${displayValue}${operand}${value}`);
      // Reset the operand and stored value
      setOperand(null);
    } else {
      displayValue === 0
        ? setDisplayValue(value)
        : setDisplayValue(displayValue + value);
    }
  }
  

  function handleOperandClick(event) {
    const value = event.target.value;
    if (operand) {
      setOperand(value);
    } else {
      setOperand(value);
    }
  }
  

  function equalsClickHandler() {
    // Convert the display value to a string
    const displayValueString = displayValue.toString();
  
    // Split the display value into individual values and operands
    const values = displayValueString.split(/[\+\-\*\/]/);
    const operands = displayValueString.split(/[^\+\-\*\/]+/).filter(x => x);
  
    // Return early if no input has been entered
    if (!values.length) {
      return;
    }
  
    let result = parseFloat(values[0]);
    for (let i = 0; i < operands.length; i++) {
      const operand = operands[i];
      const value = parseFloat(values[i + 1]);
      switch (operand) {
        case "+":
          result += value;
          break;
        case "-":
          result -= value;
          break;
        case "*":
          result *= value;
          break;
        case "/":
          result /= value;
          break;
        default:
          result = displayValue;
      }
    }
  
    setDisplayValue(result.toString());
    setOperand(null);
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
    let currentValue;
    if (typeof displayValue === "number") {
      currentValue = displayValue.toString();
    } else {
      // Get the current value from the display value
      const values = displayValue.split(/[\+\-\*\/]/);
      currentValue = values[values.length - 1];
    }
  
    if (currentValue.includes(".")) {
      return; 
    }
    setDisplayValue(`${displayValue}.`);
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
