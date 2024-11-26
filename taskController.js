const Task = require ("../models/Task");

exports.createTask = async (req, res) => {
  const { title, description, deadline, priority } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });
  
  try {
    const task = new Task({ userId: req.user.id, title, description, deadline, priority });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating the task" });
  }
};
// exports.createTask = async (req, res) => {
//     const { title, description, deadline, priority } = req.body;
//     if (!title) return res.status(400).json({ error: "Title is required" });
  
//     try {
//       const task = new Task({ userId: req.user.id, title, description, deadline, priority });
//       await task.save();
//       res.status(201).json(task);
//     } catch (error) {
//       res.status(500).json({ error: "An error occurred while creating the task" });
//     }
//   };