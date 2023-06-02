import Label from './Label';
import Square from './Square'
const Card = (props) =>{
    // biến bgColor sữ dụng children để lấy value ở thẻ Card
    const bgColor = props.children
    return(
        <div className='Card'>
            <Square bgColor={bgColor}/>
            <Label text={bgColor}/>
        </div>
    )
}
export default Card