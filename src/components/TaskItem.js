function TaskItem({ task, index, toggleComplete, deleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(index)}
      />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginLeft: "10px",
          flex: 1,
        }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(index)}>Delete </button>
    </li>
  );
}

export default TaskItem;