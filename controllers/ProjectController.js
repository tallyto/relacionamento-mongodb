const Project = require("../models/project");
const Task = require("../models/task");

class ProjectController {
  async index(req, res) {
    try {
      const project = await Project.find().populate(["user",'tasks']);
      return res.json(project);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Error loading projects" });
    }
  }

  async findById(req, res) {
    try {
      const project = await Project.findById(req.params.id).populate("user");
      return res.json(project);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Error loading project" });
    }
  }

  async store(req, res) {
    try {
      const { title, description, tasks } = req.body;

      const project = await Project.create({
        title,
        description,
        user: req.userId
      });

      await Promise.all(
        tasks.map(async task => {
          const projectTask = new Task({ ...task, project: project._id });

          await projectTask.save();

          project.tasks.push(projectTask);
        })
      );

      await project.save();

      return res.json(project);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Error creating new project" });
    }
  }

  async update(req, res) {
    try {
      const { title, description, tasks } = req.body;

      const project = await Project.findByIdAndUpdate(req.params.id,{
        title,
        description,
      },{new: true}); //Retorna o valor atualizado

      project.task = [];
      await Task.remove({project: project._id})

      await Promise.all(
        tasks.map(async task => {
          const projectTask = new Task({ ...task, project: project._id });

          await projectTask.save();

          project.tasks.push(projectTask);
        })
      );

      await project.save();

      return res.json(project);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Error creating new project" });
    }

  }

  async delete(req, res) {
    try {
      await Project.findByIdAndRemove(req.params.id);
      return res.json();
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Error deleting project" });
    }
  }
}

module.exports = new ProjectController();
