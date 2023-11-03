import DisplayComponent from "./Display/DisplayComponent";
import KeyboardComponent from "./Keyboard/KeyboardComponent";
import style from './calculatorStyle.module.css';
import { useState } from "react";
// Main Component of Calculator
export default function CalculatorComponent() {
  const [result, setResult] = useState("0");
  function handleCurrentValue(value){
    if( value === "." && result.includes(".")){
      return;
    }
    if(result!=="0"){
      let newVal = result+value;
      setResult(newVal);
    }else{
      setResult(value)
    }
  }
  return (
    <>
      {/* Display Component */}
      <div className={style.CalculatorComponent}>
        <DisplayComponent result={result}/>
        <KeyboardComponent handleCurrentValue={handleCurrentValue}/>
      </div>
    </>
  );
}
