import React, { useContext, useState } from 'react'
import BackgroudWrapper from './BackgroudWrapper';
import UserContext from '../utils/UserContext';

const TaskCard = ({task}) => {
 const {setShowEditTask, setTaskToBeEdit,setShowDeleteTask} = useContext(UserContext)
 const [showEdel, setShowEdel] = useState(false)
  return (
    <>
      <div className='bg-[aliceblue] px-2 py-3 relative mb-2'>
        <div className='flex justify-between mb-[7px]'>
          <span className='font-bold'>{task.title}</span><span className='bg-[rgb(58_148_191)] text-[white] p-[3px]'>{task.priority}</span></div>
        <hr />
        <p className='text-[15px] text-justify mt-1'>{task.description}</p>
        <div className='flex justify-between mb-3'>
            <span className='font-medium'>{task.assignee}</span>
            <div>
                <button onClick={()=> setShowEdel(!showEdel)} className='bg-[rgb(58_148_191)] text-[white] px-[7px] py-px'>:</button>
            </div>
        </div>
        <span  className='bg-[rgb(58_148_191)] text-[white] px-[27px] py-[4px] rounded-[4px]'>{task.status==='Pending'? 'Assign' : task.status}</span>
        {showEdel &&  (<div className='bg-[rgb(167,191,219)] absolute z-10 p-[11px] rounded-[10px] width-[119px] top-[15%] left-[38%]'>
          <button onClick={()=>{  
            setShowEdel(false)
            setShowEditTask(true)
            setTaskToBeEdit(task)
            }}>Edit</button>
          <hr />
          <button onClick={()=>{
            setShowEdel(false)
            setShowDeleteTask(true)
            setTaskToBeEdit(task)

          }}>Delete</button>
        </div>)}
    </div>
    </>
  
  )
}

export default TaskCard;