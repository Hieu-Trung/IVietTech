import React from 'react'
import ChauBaiTap from './ChauBaiTap'
const ConBaiTap = (props) => {
  return (
    <div>
        <b>2. Truyền prop từ cha sang con:</b>
        <p>{props.Text}</p>
        <ChauBaiTap textFromBT = {props.Text}/>
    </div>
  )
}

export default ConBaiTap