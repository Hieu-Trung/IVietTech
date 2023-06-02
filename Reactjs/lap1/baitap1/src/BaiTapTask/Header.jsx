import React from 'react'
import SearchTask from './ComponentHeader/SearchTask'
import CreateTask from './ComponentHeader/CreateTask'

const Header = (props) => {
  return (
    <div className='Header'>
      <CreateTask  setIsCreate={props.setIsCreate} />
      <SearchTask/>
    </div>
  )
}

export default Header