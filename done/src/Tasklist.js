  import React from 'react'
  import Task from './Task'

export default function Tasklist({tasks, onDelete,selected}) {
    console.log(tasks)
      let filteredTasks = tasks.filter((task)=> task.category === selected ? task : null)
   
   // 5.If the button for "All" is selected, all the tasks should be displayed.
    //maybe if statement for all , else statement for  filter
    if(selected === "All"){
      return(
      <div>
         {tasks.map((task)=> <Task  selected={selected} onDelete={onDelete} key={task.id} task={task}/>)}
      </div>
      )
      

    }

    else{
      
      return (
        <div className=''>
          
           {filteredTasks.map(task=><Task  selected={selected} onDelete={onDelete} key={task.id} task={task}/>) }
        </div>
      )

    }
   

    }
   
 

