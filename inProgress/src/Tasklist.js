  import React from 'react'
  import Task from './Task'

export default function Tasklist({tasks, onDelete,selected}) {
    console.log(tasks)

  
       
    
   
    let filteredTasks = selected === "All"?  tasks : tasks.filter((task)=> task.category === selected)




    
    //filter through task, return if category is selected
 
   // 5.If the button for "All" is selected, all the tasks should be displayed.
    //maybe if statement for all , else statement for  filterd task
  
   
    return(
     <div> 
      {filteredTasks.map((task)=> !task? null : <Task onDelete={onDelete} selected={selected} task={task} key={task.id}/>)} 
     </div>
    )
  
   

    }
   
 

