import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: "Eating food",
      completed: false
    },
    {
      id: 2,
      taskName: "Eating food 2",
      completed: true
    }
  ])

  function handleAddition()
  {
    let data ={
      id : tasks.length,
      taskName : input,
      completed : false
    }
    setTasks((prev)=> {
      return [...prev , data]
    } )
  }

  return (
    <div>
      <h1>To-Do-App </h1>
      <div>
        <input type="text" placeholder='enter the task' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAddition}>Add</button>

      </div>
      <div>
        <ol>
          {tasks.map((task, i) => <li key={i}> <input type='checkbox' checked={task.completed} />{task.taskName} <button>Delete</button></li>)}
        </ol>

      </div>
    </div>
  )
}

export default App
