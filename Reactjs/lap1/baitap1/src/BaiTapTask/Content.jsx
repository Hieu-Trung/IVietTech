import React from 'react'
import Card from './ComponentContent/Card'
import { FormCreateTask } from './ComponentContent/FormCreateTask'
const Content = (props) => {
  if (props.isCreate) {
    return (
      <div className='content'>
        <div className='form_task'>
          <FormCreateTask  setIsCreate={props.setIsCreate}/>
        </div>
      </div>
    )
  } else {
    return (
      <div className='content'>
        <div className='list-task'>
          <Card
            borderCard="orange"
            title="task 1"
            creator="Trung"
            status="Doing"
            description="content"
          />
        </div>
      </div>
    )
  }
}

export default Content