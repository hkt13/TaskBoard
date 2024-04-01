import React, { useContext } from 'react'
import BackgroudWrapper from './BackgroudWrapper';
import { IoIosCloseCircleOutline } from "react-icons/io";
import UserContext from '../utils/UserContext';

const DeleteTask = ({task}) => {
    const {setShowDeleteTask, tasks, setTasks} = useContext(UserContext)
    const taskId = task.id;
    const HandleClick=()=>{
        const filteredtasks = tasks.filter(task=>{
            return task.id!==taskId;
        })
       setTasks(filteredtasks)
       setShowDeleteTask(false)
    }
  return (
    <BackgroudWrapper>
          <div>
            <div className='bg-white p-3 flex justify-between'>
                <span className='font-bold'>DELETE TASK</span>
                <button onClick={()=>{
                     setShowDeleteTask(false)
                }}><IoIosCloseCircleOutline /></button>
            </div>
            <div className='bg-[rgb(224,191,223)] bg-[linear-gradient(90deg,_rgba(224,191,223,1)_0%,_rgba(204,205,235,1)_35%,_rgba(206,203,224,1)_100%)] p-4'>
           <p className='mb-4'>Do You Wish to Delete Task</p>
           <div className='flex gap-14'>
            <span className='font-bold'>{task.title}</span>
            <div>
                <button className='text-white bg-blue-900 px-2 py-1' onClick={HandleClick}>Yes</button>
                <button className='text-white bg-blue-900 px-2 py-1 ml-2' onClick={()=>{
                     setShowDeleteTask(false)
                }}>No</button>
            </div>
           </div>
            </div>
          </div>
    </BackgroudWrapper>
  
  )
}

export default DeleteTask;