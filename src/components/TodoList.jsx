import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [toDoTasks, setToDoTasks] = useState([]);

  const handleGetTask = (value) => {
    setTask(value);
    console.log(task); // Log the current task value
  };

  const handleAddTask = () => {
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    const randomId = Math.floor(Math.random() * 100000);
    const newTask = { id: randomId, name: task.trim(), completed: false };

    setToDoTasks((prevTasks) => [...prevTasks, newTask]);
    setTask(""); // Reset input field
  };

  const handleDeleteTask = (id) => {
    setToDoTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setToDoTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          style={{
            width: "300px",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          onChange={(e) => handleGetTask(e.target.value)}
        />
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginLeft: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>

      <div style={{ width: "450px", margin: "20px auto", textAlign: "left" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {toDoTasks.map((todo) => (
            <li
              key={todo.id}
              style={{
                margin: "10px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#f9f9f9",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            >
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#888" : "#000",
                }}
              >
                {todo.name}
              </span>
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                  style={{ marginRight: "10px", cursor: "pointer" }}
                />
                <button
                  style={{
                    padding: "5px 10px",
                    fontSize: "14px",
                    cursor: "pointer",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleDeleteTask(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
