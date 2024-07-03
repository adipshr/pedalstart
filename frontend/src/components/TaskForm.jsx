import React, { useState } from "react";
import { createTask, updateTask } from "../api";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ existingTask }) => {
  const [title, setTitle] = useState(existingTask ? existingTask.title : "");
  const [description, setDescription] = useState(
    existingTask ? existingTask.description : ""
  );
  const [status, setStatus] = useState(existingTask ? existingTask.status : "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title, description, status };

    if (existingTask && existingTask._id) {
      await updateTask(existingTask._id, task);
    } else {
      await createTask(task);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
