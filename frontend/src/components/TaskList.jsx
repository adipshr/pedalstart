import React from "react";
import { Link } from "react-router-dom";

const TaskList = ({ tasks }) => (
  <div>
    <Link
      to="/task/new"
      className="bg-blue-500 text-white p-2 rounded mb-4 inline-block"
    >
      Add Task
    </Link>
    <ul className="list-none p-0">
      {tasks.map((task) => (
        <li key={task._id} className="mb-2">
          <Link
            to={`/task/${task._id}`}
            className="text-blue-500 hover:underline"
          >
            {task.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default TaskList;
