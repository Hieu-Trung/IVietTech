import React from 'react'
import AllTask from './ComponentTabBar/AllTask'
import NewTask from './ComponentTabBar/NewTask'
import DoingTask from './ComponentTabBar/DoingTask'
import DoneTask from './ComponentTabBar/DoneTask'
const TabBar = () => {
  
  return (
    <div className='tabBar'>
     <AllTask/>
     <NewTask/>
     <DoingTask/>
     <DoneTask/>
    </div>
  )
}

export default TabBar