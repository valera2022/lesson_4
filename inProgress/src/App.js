
import './App.css';
import { useEffect ,useState} from 'react';
import Tasklist from './Tasklist';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';


function App() {
  const [tasks,setTasks] = useState([])
  const [categories,setCategories] = useState(["All", "Code", "Food", "Money", "Misc"])
  const [selected,setSelected] = useState("")
  
  

  function handleDeleteTask(){
  
  }

 

 
     
  return (
    <div className="main-container">
       <CategoryFilter setSelected={setSelected} selected={selected}categories={categories} />
  
       <NewTaskForm categories={categories}/>
     <Tasklist onDelete={handleDeleteTask} selected={selected} tasks={tasks  }/>
      
    </div>
  );
}

export default App;
