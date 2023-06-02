import Square from './Square';
import Label from './Label'
const Card = (props) => {
    const styleCard ={
        borderColor: props.children,
    }
    return(
        <div className='Card' style={styleCard}>
            <Square bgSquare="yellow" texPosition="left"/>
            <Label bgRight="#ffffff" textRight="Trung"/>
        </div>
    )
}
export default Card;