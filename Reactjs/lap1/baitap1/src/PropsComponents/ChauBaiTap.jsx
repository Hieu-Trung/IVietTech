import React from 'react'

const ChauBaiTap = (props) => {
  return (
    <div>
        <b>3. Props từ con sang cháu được truyền từ cha</b>
        <div>{props.textFromBT}</div>
    </div>
  )
}

export default ChauBaiTap