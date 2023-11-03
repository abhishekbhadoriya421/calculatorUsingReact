export default function SpecialButtonComponent({handleCurrentValue}){
    const buttonStyle = {
        width:'180px',
        height:'90px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'2rem',
        backgroundColor: '#e8e8e8',
        color:'#525252'
    }
    
    return(<>
        <button 
        style={buttonStyle}
        onClick={()=> handleCurrentValue("0")}
        >0</button>
    </>)
}