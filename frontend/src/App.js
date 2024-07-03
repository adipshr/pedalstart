import React, { useState, useEffect } from "react";
import {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "./api";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getAllTasks();
    setTasks(response.data);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit Form Data:", form); // Add logging

    if (currentTask) {
      try {
        await updateTask(currentTask.taskId, form);
      } catch (error) {
        console.error("Failed to update task:", error);
        return;
      }
    } else {
      try {
        await createTask(form);
      } catch (error) {
        console.error("Failed to create task:", error);
        return;
      }
    }
    fetchTasks();
    setForm({ title: "", description: "", dueDate: "", status: "pending" });
    setCurrentTask(null);
  };

  const handleEdit = async (taskId) => {
    const response = await getTaskById(taskId);
    setForm(response.data);
    setCurrentTask(response.data);
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={form.status}
            onChange={handleInputChange}
            required
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit">{currentTask ? "Update" : "Add"} Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.taskId}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Status: {task.status}</p>
            <button
              onClick={() => handleEdit(task.taskId)}
              className="edit-button"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task.taskId)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
