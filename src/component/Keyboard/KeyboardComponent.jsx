import ButtonComponent from "./buttons/ButtonComponent";
import style from "./keyboardStyle.module.css";
import SpecialButtonComponent from "./buttons/SpecialButtonComponent";
import OperatorComponent from "./buttons/OperatorButtonComponent";
// Keyboard Component
// background-color: #e8e8e8;
// color: #525252;

// backgroundColor: '#ff922a',
// color:'white'
export default function KeyboardComponent({ handleCurrentValue,handleAction }) {
  return (
    <>
      <div className={style.buttonContainer}>
        <OperatorComponent icon="C" handleAction={handleAction}/>
        <OperatorComponent icon="+/-" handleAction={handleAction}/>
        <OperatorComponent icon="%" handleAction={handleAction}/>

        <OperatorComponent icon="/" handleAction={handleAction}/>
        <ButtonComponent icon="7" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="8" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="9" handleCurrentValue={handleCurrentValue} />

        <OperatorComponent icon="*" handleAction={handleAction}/>
        <ButtonComponent icon="4" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="5" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="6" handleCurrentValue={handleCurrentValue} />

        <OperatorComponent icon="-" handleAction={handleAction}/>
        <ButtonComponent icon="1" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="2" handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="3" handleCurrentValue={handleCurrentValue} />

        <OperatorComponent icon="+" handleAction={handleAction}/>
        <SpecialButtonComponent handleCurrentValue={handleCurrentValue} />
        <ButtonComponent icon="." handleCurrentValue={handleCurrentValue} />

        <OperatorComponent icon="=" handleAction={handleAction}/>
      </div>
    </>
  );
}
