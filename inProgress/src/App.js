
import './App.css';
import { useEffect ,useState} from 'react';
import Tasklist from './Tasklist';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';


function App() {
  const [tasks,setTasks] = useState([])
  const [categories,setCategories] = useState(["All", "Code", "Food", "Money", "Misc"])
  const [selected,setSelected] = useState("")

  console.log(tasks)

 
  
  

  function handleDeleteTask(){
  
  }

  useEffect(()=>{
      fetch("http://localhost:4000/tasks")
      .then(response=> response.json())
      .then(data=>{console.log(data)
            setTasks(data)
      })
  },[])

  console.log(tasks)

 

 
     
  return (
    <div className="main-container">
       <CategoryFilter setSelected={setSelected} selected={selected}categories={categories} />
  
       <NewTaskForm categories={categories}/>
     <Tasklist onDelete={handleDeleteTask} selected={selected} tasks={tasks}/>
      
    </div>
  );
}

export default App;
