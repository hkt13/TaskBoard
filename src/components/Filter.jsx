import React, { useContext, useState } from 'react'
import UserContext from '../utils/UserContext';

const Filter = () => {
  const {setShowCreateTask, tasks, setTasks} = useContext(UserContext)
  const [assigne, setAssigne] = useState('')
  const [priority, setPriority] = useState('')
  const [startDate, setStartDate] = useState('')
  const [originalTasks, setOriginalTasks] = useState([])
  const HandleClick=()=>{
    const filteredTasks = tasks.filter(task => {
      return (assigne !== '' ? task.assignee === assigne : true) && (priority !== '' ? task.priority === priority : true)
    })
    setOriginalTasks(tasks)
     setTasks(filteredTasks)
  }
  const HandleChange=(e)=>{
     if(e.target.id==='assigne'){
      setAssigne(e.target.value)
     }
     else if(e.target.id==='priority'){
      setPriority(e.target.value)
     }
     else if(e.target.id==='startDate'){
      setStartDate(e.target.value)
     }
  }
  function HandleClearClick() {
    setTasks(originalTasks)
    setAssigne('')
    setPriority('')
  }
  return (
    <div className='flex mb-[15px] mt-[10px] justify-between'>
    <div className='flex gap-[11px] items-center'>
      <span className='font-semibold'>Filter By:</span>
      <div className='flex gap-3' onChange={HandleChange}>
      <input type="text" id='assigne' placeholder='Assigne Name' className='px-[7px] py-[2px] w-[114px] rounded-[7px]' value={assigne}/>
      <select className='px-[7px] py-[2px] w-[114px] rounded-[7px] text-gray-400' id='priority'>
      <option value="">Priority</option>
      <option value="P1">P1</option>
      <option value="P2">P2</option>
      <option value="P3">P3</option>
      </select>
      <input type="date" className='px-[7px] py-[2px] w-[125px] rounded-[7px]' id='startDate'/>
      <button className='bg-[#3a94bf] text-[white] px-[17px] py-[2px] rounded-[6px]' onClick={HandleClick}>Filter</button>
      <button className='bg-[#3a94bf] text-[white] px-[17px] py-[2px] rounded-[6px]' onClick={HandleClearClick}>Clear Filter</button>
      </div>
      
    </div>
    <div>
      <button className='bg-[#3a94bf] text-[white] px-[30px] py-[3px] rounded-[4px]' onClick={()=>setShowCreateTask(true)}>Add New Task</button>
    </div>
   </div>
  )
}

export default Filter;