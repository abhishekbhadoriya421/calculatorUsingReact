import ButtonComponent from "./buttons/ButtonComponent";
import style from "./keyboardStyle.module.css";
import SpecialButtonComponent from "./buttons/SpecialButtonComponent";
import OperatorComponent from "./buttons/OperatorButtonComponent";
// Keyboard Component
// background-color: #e8e8e8;
// color: #525252;

// backgroundColor: '#ff922a',
// color:'white'
export default function KeyboardComponent({ handleCurrentValue }) {
  return (
    <>
      <div className={style.buttonContainer}>
        <OperatorComponent icon="C" />
        <OperatorComponent icon="+/-" />
        <OperatorComponent icon="%" />
        <OperatorComponent icon="/" />
        <ButtonComponent icon="7" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="8" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="9" handleCurrentValue={handleCurrentValue} />
        <OperatorComponent icon="*" />
        <ButtonComponent icon="4" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="5" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="6" handleCurrentValue={handleCurrentValue} />
        <OperatorComponent icon="-" />
        <ButtonComponent icon="1" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="2" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="3" handleCurrentValue={handleCurrentValue} />
        <OperatorComponent icon="+" />
        <SpecialButtonComponent handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="." handleCurrentValue={handleCurrentValue}/>
        <OperatorComponent icon="=" />
      </div>
    </>
  );
}
