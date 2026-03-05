const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRoutes = require("./models/project");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);




app.get("/", (req, res) => {
  res.send("Server is working ");
});

mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
.then(() => console.log("DB Connected"))
.catch((err) => console.log(" DB Error:", err));


app.post("/api/projects", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/projects/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project Deleted " });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
