import React, { useState, useEffect } from "react";
import { getTaskById } from "../api";

const TaskDetail = ({ match }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask();
  });

  const fetchTask = async () => {
    const response = await getTaskById(match.params.id);
    setTask(response.data);
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskDetail;
