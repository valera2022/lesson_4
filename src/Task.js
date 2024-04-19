import React, { useEffect } from 'react'

export default function Task({task,onDelete,selected}) {
  console.log(task)
  console.log(selected)

  // 1.When the delete button is clicked
        // use event onClick
  
  
  // 2.Send a DELETE request to our server
       // use fetch delete
   
  //3. and also the task should be removed from the list(without a refresh).
         //update the state with new data from our array method
  // if delete button is clicked then delete request to server. then use array method to filter out deleted task.
  
  // 4.The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
     // .filter() the array. We will use === operator
// 5.If the button for "All" is selected, all the tasks should be displayed.
    //maybe if statement for all , else statement for  filter

  


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
