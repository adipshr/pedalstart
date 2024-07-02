import React from "react";

const TaskDetail = ({ task, onEdit, onDelete }) => (
  <div>
    <h1 className="text-3xl font-bold mb-4">{task?.title}</h1>
    <p className="mb-4">{task?.description}</p>
    <button
      className="bg-yellow-500 text-white p-2 rounded mr-2"
      onClick={onEdit}
    >
      Edit
    </button>
    <button className="bg-red-500 text-white p-2 rounded" onClick={onDelete}>
      Delete
    </button>
  </div>
);

export default TaskDetail;
