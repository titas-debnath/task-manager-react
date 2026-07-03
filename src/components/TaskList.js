import TaskItem from "./TaskItem";

function TaskList({ tasks, search, toggleComplete, deleteTask }) {
  return (
    <ul>
      {tasks
        .filter((t) =>
          t.text.toLowerCase().includes(search.toLowerCase())
        )
        .map((t, index) => (
          <TaskItem
            key={index}
            task={t}
            index={index}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
    </ul>
  );
}

export default TaskList;