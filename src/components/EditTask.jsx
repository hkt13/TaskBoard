import React, { useContext, useState } from 'react'
import UserContext from '../utils/UserContext';
import { IoIosCloseCircleOutline } from "react-icons/io";
import BackgroudWrapper from './BackgroudWrapper';

const EditTask = ({task}) => {
    const taskId = task.id;
    const {setShowEditTask,tasks,setTasks} = useContext(UserContext)
    const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [team, setTeam] = useState(task.team)
  const [assignee, setAssignee] = useState(task.assignee)
  const [priority, setPriority] = useState(task.priority)
  const [taskStatus, setTaskStatus] = useState(task.status)
 
  const HandleChange=(e)=>{
    if (e.target.id==='selectPriority') {
      setPriority(e.target.value)
    }
    else   if (e.target.id==='selectStatus') {
      setTaskStatus(e.target.value)
    }
 }

 const HandleCreateTask=()=>{
    const filteredTasks = tasks?.filter(task=>{
        console.log('init')
        return task.id!==taskId;
    })
    setTasks([
      ...filteredTasks,
      {
      'title': title,
      'description': description,
      'team': team,
      'assignee': assignee,
      'priority': priority,
      'status': taskStatus,
      id : taskId
    }
  ])
  setTitle('');
setDescription('');
setTeam('');
setAssignee('');
  setShowEditTask(false);
    }

  return (
    <BackgroudWrapper>
          <div className=' bg-[rgb(224,191,223)] bg-[linear-gradient(90deg,_rgba(224,191,223,1)_0%,_rgba(204,205,235,1)_35%,_rgba(206,203,224,1)_100%)]'>
      <div className='bg-[white] flex justify-between px-[12px] py-[6px]'>
        <span className='font-bold'>Edit A TASK</span><button className='font-bold'
         onClick={()=>{
          setShowEditTask(false)
        }}
         ><IoIosCloseCircleOutline /></button>
        </div>
        <div className='pl-[12px] pr-[12px] py-[16px] flex flex-col gap-[1.15rem]' onChange={HandleChange}>
        <div className='flex justify-between flex-col'><span>Title:</span><input type="text" id='title' value={title} readOnly/></div>
      <div className='flex justify-between flex-col'><span>Description:</span><textarea cols="22" rows="2" id='textarea' value={description} readOnly/></div>
      <div className='flex justify-between flex-col'><span>Team:</span><input type="text" name="" id="team"  value={team} readOnly/></div>
      <div className='flex justify-between flex-col'><span>Assignee:</span><input type="text" name="" id="assignee"  value={assignee} readOnly/></div>
      <div className='flex justify-between flex-row gap-[1.15rem]'>
        <div>
       <span>Priority:</span>  
      <select className='px-[7px] py-[2px] w-[114px] rounded-[7px] text-gray-400 ml-[0.65rem]' id='selectPriority' value={priority}>
      <option value="P1">P1</option>
      <option value="P2">P2</option>
      <option value="P3">P3</option>
    </select>
        </div>
    <div>
      <span>Status</span>
      <select className='px-[7px] py-[2px] w-[114px] rounded-[7px] text-gray-400 ml-[0.65rem]' id='selectStatus' value={taskStatus}>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
      <option value="Deployed">Deployed</option>
      <option value="Deffered">Deffered</option>
    </select>
    </div>
    
    </div>
      <button className='bg-white' onClick={HandleCreateTask}>Edit</button>
        </div>

    </div>
    </BackgroudWrapper>
  
  )
}

export default EditTask;