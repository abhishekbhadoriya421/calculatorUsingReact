export default function SpecialButtonComponent(){
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
        <button style={buttonStyle}>0</button>
    </>)
}