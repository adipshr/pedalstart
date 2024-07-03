const Task = require("../models/task.model");

// Retrieve all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const count = await Task.countDocuments();
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDate: req.body.dueDate,
      taskId: count + 1,
    });

    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error("Error creating task:", err.message); // Log the error
    res.status(400).json({ message: err.message });
  }
};

// Retrieve a single task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ taskId: req.params.id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an existing task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({ taskId: req.params.id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (req.body.title !== undefined) {
      task.title = req.body.title;
    }
    if (req.body.description !== undefined) {
      task.description = req.body.description;
    }
    if (req.body.status !== undefined) {
      task.status = req.body.status;
    }
    if (req.body.dueDate !== undefined) {
      task.dueDate = req.body.dueDate;
    }

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    console.error("Error updating task:", err.message); // Log the error
    res.status(400).json({ message: err.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  const taskId = req.params.id;
  console.log("Delete request received for taskId:", taskId);

  try {
    const task = await Task.findOne({ taskId: taskId });

    if (!task) {
      console.log("Task not found for taskId:", taskId);
      return res.status(404).json({ message: "Task not found" });
    }

    await Task.deleteOne({ taskId: taskId });
    console.log("Task successfully deleted for taskId:", taskId);
    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error("Error deleting task:", err.message); // Log the error
    res.status(500).json({ message: err.message });
  }
};
