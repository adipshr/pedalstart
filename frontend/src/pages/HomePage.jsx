import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Task Management</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;
