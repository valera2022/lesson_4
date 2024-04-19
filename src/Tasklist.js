  import React from 'react'
  import Task from './Task'

export default function Tasklist({tasks, onDelete,selected}) {
    console.log(tasks)
    let filteredTasks = tasks.filter((task)=> task.category === selected ? task : null
    )
    console.log(filteredTasks)
  return (
    <div>
       {tasks.map(task=><Task  selected={selected} onDelete={onDelete} key={task.id} task={task}/>) }
    </div>
  )
}
