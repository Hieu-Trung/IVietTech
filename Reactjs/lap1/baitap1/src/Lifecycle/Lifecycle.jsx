import React, { useEffect, useState } from 'react'
// Tóm tắt: 
// muon 2 state là count và message
//mounted: check count to show message
//unmount: reset count === 0 để tắt mounted
// demo useRef
import DemoUseRef from './DemoUseRef';
import BTUseRef from './BTUseRef';
const Lifecycle = () => {
    const [count, setCount] = useState(0);
    const [messager, setMessager] = useState()

    useEffect(() => {
        //Mounted
        if (count === 0) {
            setMessager('Not yet update')
        } else {
            setMessager(`Update ${count} times`)
        }
    }, [count])
    const handleClick = () => {
        setCount(count + 1)
    }
    //unmount
    useEffect(() => {
        //mounted
        console.log('mounted');
        return () => {
            //unmount
            //reset count, interval, timeout,..... here
            console.log('mounting');
        }
    })
    return (
        <div>
            <div><button onClick={handleClick}>click</button>{count}</div>
            <div>{messager}</div>
            <hr />
            <h1>DemoUseRef</h1>
            <DemoUseRef />
            <hr />
            <h1>BT useRef</h1>
            <BTUseRef />
        </div>
    )
}

export default Lifecycle