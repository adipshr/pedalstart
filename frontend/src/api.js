import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
});

export const getAllTasks = () => api.get("/");
export const createTask = (task) => api.post("/", task);
export const getTaskById = (id) => api.get(`/${id}`);
export const updateTask = (id, task) => api.put(`/${id}`, task);
export const deleteTask = (id) => api.delete(`/${id}`);
