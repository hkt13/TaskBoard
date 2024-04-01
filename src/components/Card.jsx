import React, { useContext } from 'react'
import TaskCard from './TaskCard';
import UserContext from '../utils/UserContext';

const Card = ({ taskStatus }) => {
  const {tasks} = useContext(UserContext)
  const filteredTasks = tasks.filter(task=>{
    return task.status===taskStatus;
  })
    const taskColors = {
      'Pending': 'bg-[#9f9a9a]',
      'In Progress': 'bg-[#f39b50]',
      'Completed': 'bg-[#039b03]',
      'Deployed': 'bg-[#2a2895]',
      'Deffered': 'bg-red-300'
    };
  console.log(filteredTasks)
    return (
      <div className='h-[350px] bg-white rounded-[8px] [box-shadow:2px_2px_2px_rgba(0,0,0,0.1)]'>
        <div className={`text-center p-2 text-white rounded-tl-[6px] rounded-tr-[6px] ${taskColors[taskStatus]} font-semibold h-[40px]`}>
          {taskStatus}   
        </div>
        <div className='p-2 scrollbar-hidden overflow-y-scroll'>
          {filteredTasks.map(task=>{
           return <TaskCard task={task}/>
})}
          </div>
      </div>
    );
  };
  
  export default Card;