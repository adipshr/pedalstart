import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskDetail from "../components/TaskDetail";

const TaskPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id !== "new") {
      const fetchTask = async () => {
        const response = await axios.get(`/api/tasks/${id}`);
        setTask(response.data);
      };

      fetchTask();
    }
  }, [id]);

  const handleEdit = async (updatedTask) => {
    if (id === "new") {
      const response = await axios.post("/api/tasks", updatedTask);
      history.push(`/task/${response.data._id}`);
    } else {
      const response = await axios.put(`/api/tasks/${id}`, updatedTask);
      setTask(response.data);
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    await axios.delete(`/api/tasks/${id}`);
    history.push("/");
  };

  return (
    <div>
      {isEditing || id === "new" ? (
        <TaskForm task={task} onSubmit={handleEdit} />
      ) : (
        <TaskDetail
          task={task}
          onEdit={() => setIsEditing(true)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default TaskPage;
