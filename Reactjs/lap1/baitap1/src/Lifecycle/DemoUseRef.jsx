import React, { useEffect, useRef } from 'react'

const DemoUseRef = () => {
    const inputRef = useRef('fd')
    useEffect(()=>{
        //mounted
        //cú phá của useRef là tên biến.current
        // sau khi compoment render thì effect sẽ render lại và focus vào input
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input ref={inputRef}/>
    </div>
  )
}

export default DemoUseRef