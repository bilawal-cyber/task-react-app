import Header from './components/header'
import Task from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'
function App() {
  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'id 1 text',
        day : 'monday',
        reminder : true,
    },
    {
        id : 2,
        text : 'id 2 text',
        day : 'tuesday',
        reminder : false,
    },
    {
        id : 3,
        text : 'id 3 text',
        day : 'tuesday',
        reminder : true,
    }
])

const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=>task.id !== id))
}

const toggleReminder=(id)=>{
     setTasks(tasks.map((task => task.id === id
      ? {...task, reminder: !task.reminder} : task)))
      console.log('toggle')
}

const addTask=(task)=>{
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id , ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
          <Header title='task' onAddClick={()=>setShowAddTask(!showAddTask)} text={showAddTask}/>
          {showAddTask && <AddTask onAdd={addTask}/>}
          {tasks.length>0 ?<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'no more tasks' }
    </div>
  );
}

export default App;
