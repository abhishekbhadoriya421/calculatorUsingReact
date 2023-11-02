import ButtonComponent from "./buttons/ButtonComponent"
import style from './keyboardStyle.module.css'
import SpecialButtonComponent from "./buttons/SpecialButtonComponent"
// Keyboard Component
// background-color: #e8e8e8;
// color: #525252;

// backgroundColor: '#ff922a',
// color:'white'
export default function KeyboardComponent(){
    return(<>
        <div className={style.buttonContainer}>
            <ButtonComponent backgroundColor='#ff922a' color='white' icon="C"/>
            <ButtonComponent backgroundColor='#ff922a' color='white' icon="+/-"/>
            <ButtonComponent backgroundColor='#ff922a' color='white' icon="%"/>
            <ButtonComponent backgroundColor='#ff922a' color='white' icon="/"/>
            <ButtonComponent backgroundColor='#e8e8e8' color='#525252' icon="7"/>
            <ButtonComponent backgroundColor='#e8e8e8' color='#525252' icon="8"/>
            <ButtonComponent backgroundColor='#e8e8e8' color='#525252' icon="9"/>
            <ButtonComponent backgroundColor='#ff922a' color='white' icon="*"/>
            <ButtonComponent backgroundColor='#e8e8e8' color='#525252' icon="4"/>
            <ButtonComponent backgroundColor='#e8e8e8' color='#525252' icon="5"/>
            <ButtonComponent backgroundColor='#e8e8e8' color='#525252' icon="6"/>
            <ButtonComponent backgroundColor='#ff922a' color='white' icon="-"/>
            <ButtonComponent backgroundColor='#e8e8e8' color='#525252' icon="1"/>
            <ButtonComponent backgroundColor='#e8e8e8' color='#525252' icon="2"/>
            <ButtonComponent backgroundColor='#e8e8e8' color='#525252' icon="3"/>
            <ButtonComponent backgroundColor='#ff922a' color='white' icon="+"/>
            <SpecialButtonComponent/>
            <ButtonComponent backgroundColor='#e8e8e8' color='#525252' icon="."/>
            <ButtonComponent backgroundColor='#ff922a' color='white' icon="="/>
         
        </div>
       
    </>)
}