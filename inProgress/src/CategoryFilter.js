import React, { useState } from 'react'

export default function CategoryFilter({categories,setSelected,selected}) {
   console.log(categories)
   
// 1.When a button is clicked, 
      //add event onClick
         
    
    // the following should happen:

// 2.Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
     //useState
// 3.The selected classname should have some css to make selected button pop out in contrast to the others. 
          // css diffent box shadow,brigther(contrast), zoom in.
// 4.The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
     // .filter() the array. We will use === operator
// 5.If the button for "All" is selected, all the tasks should be displayed.
    //maybe if statement for all , else statement for  filter
     let classId 

    function handleClick(event){
       event.preventDefault()
       console.log(event.target.value)
       setSelected(event.target.value)
     //   classId = "selected"

    }

//sudo
    //map through each category and set it to categories to display var
         return( 
          categories.map((cat)=>{
               
        return(  
          <div>
           <button onClick={handleClick} value={cat} className={cat === selected? "selected" : "non-selected"}>{cat}</button>
         </div>
        )
           })
       )     

    // set var className to selected or not selected depedning if cat is selected

    //return div with className and onclick to set selected and display category


     //return catergories to display outside map
   
 
}
