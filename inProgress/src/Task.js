import React, { useEffect } from 'react'

export default function Task({task,onDelete,selected}) {
  console.log(task.text)
  console.log(selected)

  // 1.When the delete button is clicked
        // use event onClick
  
  
  // 2.Send a DELETE request to our server
       // use fetch delete
   
  //3. and also the task should be removed from the list(without a refresh).
         //update the state with new data from our array method
  // if delete button is clicked then delete request to server. then use array method to filter out deleted task.
  function handleClick(event){
           event.preventDefault()
           fetch(`http://localhost:4000/tasks/${task.id}`,
            {method:"DELETE"}
           )
           .then(()=> {console.log("deleted task")
                        onDelete(task.id) })
  }



  return (
  <div  >
    <div className='tasklist'>
     <ul>
      <li>
      {task.text}
      </li>
     </ul>
        <div className='category'>
        {"category: "+ task.category}
        </div>
     
    </div>
     
        {/* <br></br> */}
      
    
        <div className='deletebutton'>
        <button className="button" onClick={handleClick}>Delete</button>
        </div>
      
      
      
    </div>
  )
}
