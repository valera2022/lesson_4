
import './App.css';
import { useEffect ,useState} from 'react';
import Tasklist from './Tasklist';
import CategoryFilter from './CategoryFilter';


function App() {
  const [tasks,setTasks] = useState([])
  const [categories,setCategories] = useState(["All", "Code", "Food", "Money", "Misc"])
  const [selected,setSelected] = useState("")


  function handleDeleteTask(id){
    console.log(id)
     let filteredTasks = tasks.filter((task)=> task.id !== id)
     setTasks(filteredTasks)
  }

 

  useEffect(()=>{
          fetch("http://localhost:4000/tasks")
          .then(res=> res.json())
          .then(data => setTasks(data))
  },[])
     
  return (
    <div className="main-container">
       <CategoryFilter setSelected={setSelected} selected={selected}categories={categories} />
  
   
     <Tasklist onDelete={handleDeleteTask} selected={selected} tasks={tasks  }/>
      
    </div>
  );
}

export default App;
