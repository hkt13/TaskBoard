import React, { useContext, useState } from 'react'
import BackgroudWrapper from './BackgroudWrapper';
import { IoIosCloseCircleOutline } from "react-icons/io";
import UserContext from '../utils/UserContext';
function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
const CreateTask = () => {
  const {setShowCreateTask,tasks,setTasks} = useContext(UserContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [team, setTeam] = useState('')
  const [assignee, setAssignee] = useState('')
  const [priority, setPriority] = useState('')
  // const [title, setTitle] = useState('')
  // console.log(title,description,team,assignee)
  const HandleChange=(e)=>{
     if (e.target.id==='title') {
      setTitle(e.target.value)
     }
     else if (e.target.id==='textarea') {
      setDescription(e.target.value)
     }
     else if (e.target.id==='team') {
      setTeam(e.target.value)
     }
     else if (e.target.id==='assignee') {
      setAssignee(e.target.value)
     }
     
     else if(e.target.id==='select'){
      console.log(e.target.value)
      setPriority(e.target.value)
     }
  }

  const HandleCreateTask=()=>{
  setTasks([
    ...tasks,
    {
    'title': title,
    'description': description,
    'team': team,
    'assignee': assignee,
    'status': 'Pending',
    'priority': priority===''?'P1':priority,
    id: generateUniqueId()
  }
])
setTitle('');
setDescription('');
setTeam('');
setAssignee('');
setShowCreateTask(false);
  }

  return (
    <BackgroudWrapper>
<div className=' bg-[rgb(224,191,223)] bg-[linear-gradient(90deg,_rgba(224,191,223,1)_0%,_rgba(204,205,235,1)_35%,_rgba(206,203,224,1)_100%)]'>
      <div className='bg-[white] flex justify-between px-[12px] py-[6px]'>
        <span className='font-bold'>CREATE A TASK</span><button className='font-bold'
         onClick={()=>{
          setShowCreateTask(false)
        }}
         ><IoIosCloseCircleOutline /></button>
        </div>
        <div className='pl-[12px] pr-[12px] py-[16px] flex flex-col gap-[1.15rem]' onChange={HandleChange}>
        <div className='flex justify-between gap-5'><span>Title:</span><input type="text" id='title'/></div>
      <div className='flex justify-between gap-5'><span>Description:</span><textarea cols="22" rows="2" id='textarea'/></div>
      <div className='flex justify-between gap-5'><span>Team:</span><input type="text" name="" id="team" /></div>
      <div className='flex justify-between gap-5'><span>Assignee:</span><input type="text" name="" id="assignee" /></div>
      <div className='flex gap-12'><label>Priority:</label> 
      <select className='px-[7px] py-[2px] w-[114px] rounded-[7px] text-gray-400' id='select'>
      <option value="P1" selected>P1</option>
      <option value="P2">P2</option>
      <option value="P3">P3</option>
    </select>
    </div>
      <button className='bg-white' onClick={HandleCreateTask}>CREATE</button>
        </div>

    </div>
    </BackgroudWrapper>
  )
}

export default CreateTask;