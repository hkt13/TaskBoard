import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import CreateTask from './components/CreateTask'
import UserContext from './utils/UserContext'
import EditTask from './components/EditTask'
import DeleteTask from './components/DeleteTask'

function App() {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false); 
  const [taskToBeEdit, setTaskToBeEdit] = useState({})
  const [tasks, setTasks] = useState([])
  // const [showEdel, setShowEdel] = useState(false)
  const [showDeleteTask, setShowDeleteTask] = useState(false)
  console.log(tasks)
  return (
    <>
    <UserContext.Provider value={{showCreateTask,setShowCreateTask,
                                  tasks,setTasks,
                                  // showEdel,setShowEdel,
                                  showEditTask,setShowEditTask,setTaskToBeEdit,
                                  showDeleteTask,setShowDeleteTask
                                  }}>
    <div className={`p-2 bg-[rgb(224,191,223)] bg-[linear-gradient(90deg,_rgba(224,191,223,1)_0%,_rgba(204,205,235,1)_35%,_rgba(206,203,224,1)_100%)] min-h-screen `}>
      <div className='max-w-[1150px] mx-[auto] my-[0] p-8'>
        <Header/>
        <Main/>
      </div>
    </div>

    {showCreateTask && <CreateTask/>}
    {showEditTask && <EditTask task={taskToBeEdit}/>}
    {showDeleteTask && <DeleteTask task={taskToBeEdit}/>}
    
    </UserContext.Provider>

    </>
  )
}

export default App
