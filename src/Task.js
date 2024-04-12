import React, { useEffect } from 'react'

export default function Task({task,onDelete}) {
  console.log(task)

  // 1.When the delete button is clicked
        // use event onClick
  
  
  // 2.Send a DELETE request to our server
       // use fetch delete
   
  //3. and also the task should be removed from the list(without a refresh).
         //update the state with new data from our array method
  // if delete button is clicked then delete request to server. then use array method to filter out deleted task.
  
  function handleClick(){
    fetch(`http://localhost:4000/tasks/${task.id}`,{
    method:"DELETE"
  })

  onDelete(task.id)

  }

  return (
    <div>
      <ul>
        <li>
      {task.text}
        </li>
        {task.category}
        <button onClick={handleClick}>Delete</button>
      </ul>
      
      
    </div>
  )
}
