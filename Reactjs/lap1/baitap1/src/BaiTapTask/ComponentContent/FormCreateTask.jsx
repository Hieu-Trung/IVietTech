import React from 'react'

export const FormCreateTask = (props) => {
    const setIsCreate = props.setIsCreate
    function handleSaveForm(){
        setIsCreate(false)
    }
    return (
        <div>
            <div className='add_task'>
                <span>Title</span>
                <input type='text' placeholder='Enter Title'/>
            </div>
            <div className='add_task'>
                <span>Creator</span>
                <input type='text' placeholder='Enter Creator'/>
            </div>
            <div className='add_task'>
                <span>Description</span>
                <input type='text' placeholder='Enter Description' />
            </div>
            <button onClick={handleSaveForm}>Save</button>
        </div>
    )
}
