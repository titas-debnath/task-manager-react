import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function TaskForm() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (task.trim() === "") return;

    const newTask = {
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  }

  function toggleComplete(index) {
    const updatedTasks = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setTasks(updatedTasks);
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div>
      {/* Counters */}
      <div style={{ marginBottom: "15px", fontWeight: "bold" }}>
         <p>📌 Total: {totalTasks}</p>
         <p>✅ Completed: {completedTasks}</p>
         <p>⏳ Pending: {pendingTasks}</p>
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {/* Search */}
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Task List */}
      <TaskList
        tasks={tasks}
        search={search}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
   </div>
  );
}

export default TaskForm;