import React, { useContext, useState } from 'react'
import UserContext from '../utils/UserContext'

const SortBy = () => {
  const {setShowCreateTask, tasks, setTasks} = useContext(UserContext)
  const [priority, setPriority] = useState('')
  const [originalTasks, setOriginalTasks] = useState([])
  const HandleClick=(e)=>{
    const sortedTasks = tasks.slice().sort((a, b) => {
      if (priority==='hightolow') {
          if (a.priority < b.priority) {
        return -1; // a should come before b
      } else if (a.priority > b.priority) {
        return 1; // a should come after b
      } else {
        return 0; // priorities are equal, maintain the order
      }
      }
      else if(priority==='lowtohigh'){
        if (a.priority > b.priority) {
          return -1; // a should come before b
        } else if (a.priority < b.priority) {
          return 1; // a should come after b
        } else {
          return 0; // priorities are equal, maintain the order
        }
      }
    
    })
    console.log(sortedTasks)
    setOriginalTasks(tasks)
    setTasks(sortedTasks)
  }
  // const ClearSort=()=>{
  //   setTasks(originalTasks)
  //   setPriority('')
  // }
  return (
    <div className='flex gap-[16px] items-center'>
    <span className='font-semibold'>Sort By:</span>
    <select className='px-[7px] py-[2px] w-[114px] rounded-[7px]' value={priority}  onChange={(e)=>setPriority(e.target.value)}>
      <option value="">Priority</option>
      <option value="hightolow">High To Low</option>
      <option value="lowtohigh">Low To High</option>
    </select>
    <button className='bg-[#3a94bf] text-[white] px-[30px] py-[3px] rounded-[4px]' onClick={HandleClick}>Sort</button>
    {/* <button className='bg-[#3a94bf] text-[white] px-[30px] py-[3px] rounded-[4px]' onClick={ClearSort}>Clear Sort</button> */}
   </div>
  )
}

export default SortBy;