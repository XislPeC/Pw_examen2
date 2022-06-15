
import './App.css';
import Info from "./components/Info.js";
import Navbar from "./components/Navbar";
import ButtonBar from "./components/ButtonBar.js";
import ProyectType from "./components/ProyectType.js";
import TaskList from "./components/TaskList";

function App() {
  
  return (
    <div className="App">
      <Navbar  brand="Pregunta 1 "/>
      
      <ProyectType />
      <TaskList />
      
    </div>
    
    
  );
}

export default App;
