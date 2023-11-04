import style from './DisplayStyle.module.css'
// Display component to sho result
export default function DisplayComponent({currentValue , action, firstOperand}){
    return(<>
        {/* Main Display */}
        <div className={style.display}>
            <nav className={style.navBar}>Calculator</nav>
            <p className={style.resultContainer}>{firstOperand || currentValue} {(action)? action : false} {firstOperand && currentValue}</p>
        </div>
    </>)
}