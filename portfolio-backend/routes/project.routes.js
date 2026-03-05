const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');
const project = require('../models/project');

router.get("/", (req, res) => {
  project.find().then(documents => {
    res.status(200).json(documents);
  });
});

router.post("/", checkAuth, (req, res) => {
  const project = new project({
    name: req.body.name,
    summary: req.body.summary,
    description: req.body.description,
    tags: req.body.tags,
    projectLink: req.body.projectLink
  });
  project.save().then(createdProject => {
    res.status(201).json({ message: "Project added successfully", id: createdProject._id });
  });
});

module.exports = router;
