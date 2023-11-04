import DisplayComponent from "./Display/DisplayComponent";
import KeyboardComponent from "./Keyboard/KeyboardComponent";
import style from "./calculatorStyle.module.css";
import { useState } from "react";
// Main Component of Calculator
export default function CalculatorComponent() {
  const [currentVal, setCurrentVal] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(false);

  // handling enter value
  function handleCurrentValue(value) {
    if (value === "." && currentVal.includes(".")) {
      return;
    }
    if (currentVal !== "0") {
      let newVal = currentVal + value;
      setCurrentVal(newVal);
    } else {
      setCurrentVal(value);
    }
  }

  // handle calculation
  function handleCalculation(num1, num2, action) {
    // console.log(num1,num2,action);
    if (action === "+") {
      return num1 + num2;
    } else if (action === "-") {
      return num1 - num2;
    } else if (action === "*") {
      return num1 * num2;
    } else if (action === "/") {
      return num1 / num2;
    } else if (action === "%") {
      return num1 % num2;
    }
  }

  // Function Of Performing Calculation
  function handleActionPerform(action) {
    if (currentVal === "0" && firstOperand === null) {
      return;
    }
// handling action to its specific ability
    switch (action) {
      case "C": {
        setFirstOperand(null);
        setCurrentVal("0");
        setOperator("");
        break;
      }
      case "=": {
        if (firstOperand === null || operator === "") {
          setFirstOperand(null);
          setCurrentVal("0");
          setOperator("");
        } else {
          let ans = handleCalculation(
            firstOperand,
            Number(currentVal),
            operator
          );
          setFirstOperand(null);
          setCurrentVal(ans);
          setOperator("");
        }
        break;
      }
      case "+": {
        if (operator === "" || firstOperand === null) {
          setFirstOperand(Number(currentVal));
          setCurrentVal("");
          setOperator("+");
        } else {
          let ans = handleCalculation(
            firstOperand,
            Number(currentVal),
            operator
          );
          setFirstOperand(ans);
          setOperator("+");
          setCurrentVal("");
        }
        break;
      }
      case "-": {
        if (operator === "" || firstOperand === null) {
          setFirstOperand(Number(currentVal));
          setCurrentVal("");
          setOperator("-");
        } else {
          let ans = handleCalculation(
            firstOperand,
            Number(currentVal),
            operator
          );
          setFirstOperand(ans);
          setOperator("-");
          setCurrentVal("");
        }
        break;
      }
      case "*": {
        if (operator === "" || firstOperand === null) {
          setFirstOperand(Number(currentVal));
          setCurrentVal("");
          setOperator("*");
        } else {
          let ans = handleCalculation(
            firstOperand,
            Number(currentVal),
            operator
          );
          setFirstOperand(ans);
          setOperator("*");
          setCurrentVal("");
        }
        break;
      }
      case "/": {
        if (operator === "" || firstOperand === null) {
          setFirstOperand(Number(currentVal));
          setCurrentVal("");
          setOperator("/");
        } else {
          let ans = handleCalculation(
            firstOperand,
            Number(currentVal),
            operator
          );
          setFirstOperand(ans);
          setOperator("/");
          setCurrentVal("");
        }
        break;
      }
      case "%": {
        if (operator === "" || firstOperand === null) {
          setFirstOperand(Number(currentVal));
          setCurrentVal("");
          setOperator("%");
        } else {
          let ans = handleCalculation(
            firstOperand,
            Number(currentVal),
            operator
          );
          setFirstOperand(ans);
          setOperator("%");
          setCurrentVal("");
        }
        break;
      }
      case "+/-": {
        if(currentVal!=="0"){
          let res = -1 * Number(currentVal)
          setCurrentVal(res);
        }
        break;
      }
      default:
        return;
    }
  }
  return (
    <>
      {/* Display Component */}
      <div className={style.CalculatorComponent}>
        <DisplayComponent
          currentValue={currentVal}
          action={operator}
          firstOperand={firstOperand}
        />
        <KeyboardComponent
          handleCurrentValue={handleCurrentValue}
          handleAction={handleActionPerform}
        />
      </div>
    </>
  );
}
