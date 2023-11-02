import DisplayComponent from "./Display/DisplayComponent";
import KeyboardComponent from "./Keyboard/KeyboardComponent";
import style from './calculatorStyle.module.css'
// Main Component of Calculator
export default function CalculatorComponent() {
  return (
    <>
      {/* Display Component */}
      <div className={style.CalculatorComponent}>
        <DisplayComponent />
        <hr />
        <KeyboardComponent />
      </div>
    </>
  );
}
