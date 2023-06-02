import React, { useEffect, useRef } from 'react'

const BTUseRef = () => {
    const selectRef = useRef(null)
    useEffect(() => {
        //mounted
        console.log('mounted', selectRef.current);
        selectRef.current.value = 'opel'
    }, [])
    return (
        <div>
            <select ref={selectRef}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default BTUseRef