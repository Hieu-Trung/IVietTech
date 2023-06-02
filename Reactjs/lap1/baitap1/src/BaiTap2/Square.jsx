const Square =(props) =>{
    const styleSquare = {
        backgroundColor: props.bgSquare,
        textAlign: props.texPosition
    }
    return(
        <div className="Square" style={styleSquare}>
            <p>{props.texPosition}</p>
        </div>
    )
}
export default Square;