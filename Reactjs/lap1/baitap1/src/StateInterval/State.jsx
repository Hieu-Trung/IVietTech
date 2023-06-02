import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0)
    setInterval(() => {
        setCount(count + 1)
        console.log(count);
    }, 2000)
    return (
        <div>{count}</div>
    )
}

export default State