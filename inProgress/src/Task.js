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

  



  return (
  <div  >
    <div className='tasklist'>
     <ul>
      <li>
      {}
      </li>
     </ul>
        <div className='category'>
        {}
        </div>
     
    </div>
     
        {/* <br></br> */}
      
    
        <div className='deletebutton'>
        <button className="button" onClick={""}>Delete</button>
        </div>
      
      
      
    </div>
  )
}
