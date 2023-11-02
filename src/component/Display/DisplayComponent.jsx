import style from './DisplayStyle.module.css'
export default function DisplayComponent(){
    return(<>
        {/* Main Display */}
        <div className={style.display}>
            <nav className={style.navBar}>Calculator</nav>
            <p className={style.resultContainer}>12345</p>
        </div>
    </>)
}