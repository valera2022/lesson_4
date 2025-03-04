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

//  function handleClick(){
//     setSelected()
// }

let categoriesTodisplay = categories.map((cat)=>{
  let className = cat === selected? "selected" : "non-selected"

  return (
       
    <div class={className} onClick={()=> setSelected(cat)}>{cat}</div>
    
)
})

    return<div>{categoriesTodisplay}</div> 
 
}
