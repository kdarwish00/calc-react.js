import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "+", "-", "*", "%", "toggle"];

  const updateCalc = (value) => {
    setCalc(calc + value);

    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }

    if (value === "%") {
      setCalc(calc.slice(0, -1));
      const result = eval(calc) / 100;
      setResult(result.toString());
      return;
    }

    if (value === "toggle") {
      if (result[0] === "-") {
        setResult(result.slice(1));
      } else {
        setResult("-" + result);
      }
      setCalc(result);
      return;
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    } else {
      const value = calc.slice(0, -1);
      setCalc(value);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__display">
        {result ? <span>({result})</span> : ""}&nbsp;
        {calc || "0"}
      </div>
      <div className="calculator__layout">
        <div className="calculator__layout-buttons">
          <button 
          id="clear" 
          className="operation" 
          onClick={deleteLast}
          >
            DEL
          </button>
          <button
            id="percentage"
            className="operation"
            onClick={() => updateCalc("%")}
          >
            %
          </button>
          <button
            id="toggle"
            className="operation"
            onClick={() => updateCalc("toggle")}
          >
            +/-
          </button>
          <button
            id="addition"
            className="operation"
            onClick={() => updateCalc("+")}
          >
            +
          </button>

          <button id="seven" className="number" onClick={() => updateCalc("7")}>
            7
          </button>
          <button id="eight" className="number" onClick={() => updateCalc("8")}>
            8
          </button>
          <button id="nine" className="number" onClick={() => updateCalc("9")}>
            9
          </button>
          <button
            id="subtraction"
            className="operation"
            onClick={() => updateCalc("-")}
          >
            -
          </button>
          <button 
            id="four" 
            className="number" 
            onClick={() => updateCalc("4")}
          >
            4
          </button>
          <button 
            id="five" 
            className="number" 
            onClick={() => updateCalc("5")}
          >
            5
          </button>
          <button 
            id="six" 
            className="number" 
            onClick={() => updateCalc("6")}
          >
            6
          </button>
          <button
            id="multiply"
            className="operation"
            onClick={() => updateCalc("*")}
          >
            *
          </button>
          <button 
            id="one" 
            className="number" 
            onClick={() => updateCalc("1")}
          >
            1
          </button>
          <button 
            id="two" 
            className="number" 
            onClick={() => updateCalc("2")}
          >
            2
          </button>
          <button 
            id="three" 
            className="number" 
            onClick={() => updateCalc("3")}
          >
            3
          </button>
          <button
            id="divide"
            className="operation"
            onClick={() => updateCalc("/")}
          >
            /
          </button>

          <button 
            id="zero" 
            className="number" 
            onClick={() => updateCalc("0")}
          >
            0
          </button>
          <button
            id="decimal"
            className="number"
            onClick={() => updateCalc(".")}
          >
            .
          </button>
          <button 
            id="equals" 
            className="operation" 
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
