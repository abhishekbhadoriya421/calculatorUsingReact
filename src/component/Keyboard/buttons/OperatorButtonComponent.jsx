export default function OperatorComponent({backgroundColor,color,icon}){
    const buttonStyle = {
        width:'90px',
        height:'90px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'2rem',
        backgroundColor: "#ff922a",
        color:"white",
        cursor: 'pointer'
    }
    return(<>
        <button style={buttonStyle}>{icon}</button>
    </>)
}