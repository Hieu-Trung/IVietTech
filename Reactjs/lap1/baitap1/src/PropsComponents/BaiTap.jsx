import React from 'react'
import ConBaiTap from './ConBaiTap'
const BaiTap = (props) => {
  return (
    <div>
        <b>1: nhập props ban đầu</b>
        <p>{props.children}</p>
        <ConBaiTap Text = {props.children}/>
    </div>
  )
}

export default BaiTap