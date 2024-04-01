import React from 'react'
import Card from './Card';
import Filter from './Filter';
import SortBy from './SortBy';
let task_status = ['Pending', 'In Progress', 'Completed', 'Deployed', 'Deffered' ]
const Main = () => {
  console.log('in main')
  return (
    <div className='p-3 border-[2px] border-[solid] border-[white] rounded-[9px] [box-shadow:2px_2px_3px_rgba(0,0,0,0.2)]'>
    <Filter/>
     <SortBy/>
     <div className='mt-6 grid grid-cols-[repeat(5,_1fr)] gap-3'>
        {task_status.map((taskStatus,index)=>(
          <Card taskStatus={taskStatus} key={index}/>
        ))}
     </div>

    </div>
  )
}

export default Main;