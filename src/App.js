import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import"./App.css";
function App(){
  return (
    <div className="app-container">
      <Navbar />
      <TaskForm />
    </div>
  );
}
export default App;