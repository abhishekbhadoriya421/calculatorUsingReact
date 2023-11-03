import style from './DisplayStyle.module.css'
export default function DisplayComponent({result}){
    return(<>
        {/* Main Display */}
        <div className={style.display}>
            <nav className={style.navBar}>Calculator</nav>
            <p className={style.resultContainer}>{result}</p>
        </div>
    </>)
}