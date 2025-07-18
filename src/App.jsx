import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([

  ])

  function handleAddition() {
    if (input.trim() === "") {
      setInput("")
      return
    }
    let data = {
      id: tasks.length,
      taskName: input,
      completed: false
    }
    setTasks((prev) => {
      return [...prev, data]
    })
    setInput("")
  }
  function handleChange(taskid) {
    setTasks((prev) => (
      prev.map((task) => {
        if (task.id === taskid) {
          return {
            ...task, completed: !task.completed
          }
        }
        else {
          return { ...task }
        }
      })
    )

    )

  }

  function handleDelete(taskid) {
    setTasks(tasks.filter((task) => task.id !== taskid))
  }

  return (
    <div>
      <h1>To-Do-App </h1>
      <div>
        <input type="text" placeholder='enter the task' value={input} onChange={(e) => setInput(e.target.value)}  onKeyDown={(e) => e.key==="Enter" && handleAddition() }/>
        <button onClick={handleAddition} >Add</button>

      </div>
      <div>
        {
          tasks.length === 0 ? <h3>No Tasks</h3> : <ol>
            {tasks.map((task) => <li key={task.id}> <input type='checkbox' checked={task.completed} onChange={() => handleChange(task.id)} /><span className={task.completed ? "strike": ""}>{task.taskName}</span> <button onClick={() => handleDelete(task.id)}>Delete</button></li>)}
          </ol>
        }


      </div>
    </div>
  )
}

export default App
