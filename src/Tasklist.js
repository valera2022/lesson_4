  import React from 'react'
  import Task from './Task'

export default function Tasklist({tasks, onDelete}) {
    console.log(tasks)
  return (
    <div>
       {tasks.map(task=><Task onDelete={onDelete} key={task.id} task={task}/>) }
    </div>
  )
}
