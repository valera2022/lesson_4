
import './App.css';
import { useEffect ,useState} from 'react';
import Tasklist from './Tasklist';


function App() {
  const [tasks,setTasks] = useState([])


  useEffect(()=>{
          fetch("http://localhost:4000/tasks")
          .then(res=> res.json())
          .then(data => setTasks(data))
  },[])
     
  return (
    <div className="App">
   
    <Tasklist tasks={tasks  }/>
      
    </div>
  );
}

export default App;
