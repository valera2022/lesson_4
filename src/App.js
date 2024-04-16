
import './App.css';
import { useEffect ,useState} from 'react';
import Tasklist from './Tasklist';
import CategoryFilter from './CategoryFilter';


function App() {
  const [tasks,setTasks] = useState([])
  const [categories,setCategories] = useState(["All", "Code", "Food", "Money", "Misc"])
  


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
    <div className="App">
       <CategoryFilter key={cat.id} cat={cat}/>
  
   
    <Tasklist onDelete={handleDeleteTask}  tasks={tasks  }/>
      
    </div>
  );
}

export default App;
