import React from 'react'

const CreateTask = (props) => {
  const setIsCreate = props.setIsCreate
  function handleCreateTask(){
    setIsCreate(true)
  }
  return (
    <div className='create_task'>
      <p onClick={handleCreateTask}>Create New Task</p>
    </div>
  )
}

export default CreateTask