
import './App.css';
import { useEffect ,useState} from 'react';
import Tasklist from './Tasklist';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';


function App() {
  const [tasks,setTasks] = useState([])
  const [categories,setCategories] = useState(["All", "Code", "Food", "Money", "Misc"])
  const [selected,setSelected] = useState("")
  const [newTask, setNewtask] = useState()

  console.log(tasks)

 
  
  

  function handleDeleteTask(id){
         console.log(id)
         let notDeleted = tasks.filter((task)=> task.id !== id )
         setTasks( notDeleted)
  }

  useEffect(()=>{
      fetch("http://localhost:4000/tasks")
      .then(response=> response.json())
      .then(data=>{console.log(data)
            setTasks(data)
      })
  },[])

  console.log(tasks)

  function AddTask (formData){
     console.log(formData)
      // setNewtask(formData)
      // console.log(newTask)
       fetch("http://localhost:4000/tasks",
        {method: "POST",
         body: JSON.stringify(formData)
        }

       )
       .then(res=> res.json())
       .then((data)=> {
        console.log(data)
        setNewtask(data)
        console.log(newTask)
      
       setTasks([...tasks, newTask])
      })
  }

 

 
     
  return (
    <div className="main-container">
       <CategoryFilter setSelected={setSelected} selected={selected}categories={categories} />
  
       <NewTaskForm sendTask={AddTask} newTask={newTask} setNewtask={setNewtask} categories={categories}/>
     <Tasklist onDelete={handleDeleteTask} selected={selected} tasks={tasks}/>
      
    </div>
  );
}

export default App;
