const Label =(props) =>{
    const styleBgColor = {
        backgroundColor: props.bgRight
    }
    return(
        <div className="Label" style={styleBgColor}>
            <p>{props.textRight}</p>
        </div>
    )
}
export default Label;