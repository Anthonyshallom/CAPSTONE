const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  deadline: { type: Date },
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Task", TaskSchema);