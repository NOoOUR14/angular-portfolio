const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },      
  summary: { type: String, required: true },
  description: { type: String, required: true },
  projectLink: { type: String },
  tags: { type: [String], default: [] },
  pictures: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Project", projectSchema);
