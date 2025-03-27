import React from 'react'
import { useRef } from 'react'


export default function NewTaskForm({categories}) {
      const popUp = useRef()

      function openPopup(){
            popUp.current.showModal()
      }

      function closePopup(){
         popUp.current.close()
      }
    
    //  Pass the list of categories to this component from App. 
    //  This component will display <option> elements for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task.
    
    return (
    <div>
        <button onClick={openPopup} className ='add'>Add</button>
        <dialog ref={popUp} id='dialog'>
           <div className='popForm-container'>
            <form className="popUpform">
              <p className='task-holder'>Task</p>
              <input type='text'/>
              <p className='category-holder'>Caterogy</p>
              <input type="text"/>
              <button className="new-task-button" type='submit'>Submit</button>
            </form>
            <button className="cancel-new-task" onClick={closePopup}>Cancel</button>
            </div>
        </dialog>
    </div>
  )
}


