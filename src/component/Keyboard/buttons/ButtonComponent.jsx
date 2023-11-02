// Props will contain => action , icon , color ,backgroundColor
export default function ButtonComponent({backgroundColor,color,icon}){
    const buttonStyle = {
        width:'90px',
        height:'90px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'2rem',
        backgroundColor: backgroundColor,
        color:color,
        cursor: 'pointer'
    }
    return(<>
        <button style={buttonStyle}>{icon}</button>
    </>)
}