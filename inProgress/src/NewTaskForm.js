import React from 'react'
import { useRef } from 'react'


export default function NewTaskForm({categories, newTask, setNewtask, sendTask}) {
      const popUp = useRef()

      function openPopup(){
            popUp.current.showModal()
      }

      function closePopup(){
         popUp.current.close()
      }

      function handleSubmit(event){
          event.preventDefault()
          
          let text = event.target.task.value
          let category = event.target.category.value
          console.log(text,category)
          let formData = {
              text,
              category
          }

          let foundCategory = categories.find((cat)=> cat === formData.category)

          if( !foundCategory || !formData.text ){
            alert("This is not the right category or the task empty. Valid Categories: All, Code, Food, Money, Misc")
          }
          else {
            sendTask(formData)
            closePopup()
            window.location.reload()

          }

                //  alert("This is not the right category. Valid Categories: All, Code, Food, Money, Misc")

          console.log(formData)

      }
    
    //  Pass the list of categories to this component from App. 
    //  This component will display <option> elements for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task.
    
    return (
    <div>
        <button onClick={openPopup} className ='add'>Add</button>
        <dialog ref={popUp} id='dialog'>
           <div className='popForm-container'>
            <form onSubmit={handleSubmit} className="popUpform">
              <p className='task-holder'>Task</p>
              <input  name="task" type='text'/>
              <p className='category-holder'>Caterogy</p>
              <input name="category" type="text"/>
              <button className="new-task-button" type='submit'>Submit</button>
            </form>
            <button className="cancel-new-task" onClick={closePopup}>Cancel</button>
            </div>
        </dialog>
    </div>
  )
}


