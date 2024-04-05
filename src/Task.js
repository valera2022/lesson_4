import React from 'react'

export default function Task({task}) {
  console.log(task)
  return (
    <div>
      <ul>
        <li>
      {task.text}
        </li>
        {task.category}
        <button>Delete</button>
      </ul>
      
      
    </div>
  )
}
