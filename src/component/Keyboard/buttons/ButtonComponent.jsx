// Props will contain => action , icon , color ,backgroundColor
export default function ButtonComponent({icon, handleCurrentValue}){
    const buttonStyle = {
        width:'90px',
        height:'90px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'2rem',
        backgroundColor: "#e8e8e8",
        color:"#525252",
        cursor: 'pointer'
    }
    return(<>
        <button style={buttonStyle}
         onClick={()=> handleCurrentValue(icon)}
        >{icon}</button>
    </>)
}