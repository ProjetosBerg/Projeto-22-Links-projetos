const Project = require("../models/Project");
const { createProjectService } = require("../Services/CreateProjectService");
const { deleteProjectService } = require("../Services/DeleteProjectService");
const { getAllProjectsService } = require("../Services/GetProjectService");
const { updateProjectService } = require("../Services/UpdateProjectService");

createProjectController = async (req, res) => {
  try {
    const { name, repository, language, link } = req.body;
    if (!name || !repository || !language || !link) {
      return res
        .status(400)
        .json({ msg: "Por favor, preencha todos os campos." });
    }

    const newProject = new Project({
      name,
      repository,
      language,
      link,
    });

    const response = await createProjectService(newProject);

    res.status(201).json({ msg: "Projeto criado com sucesso!", response });
  } catch (error) {
    console.log(error);
  }
};

getProjectsController = async (req, res) => {
  try {
    const { repository } = req.query;
    const response = await getAllProjectsService({ params: repository });

    res.status(200).json({ projects: response });
  } catch (error) {
    console.log(error);
  }
};

updateProjectController = async (req, res) => {
    try {
      const { name, repository, language, link } = req.body;
      const { id } = req.params;
  
      const data = new Project({
        name,
        repository,
        language,
        link,
      });
  
      const response = await updateProjectService(id, data);
  
      res.status(201).json({ msg: "Projeto criado com sucesso!", response });
    } catch (error) {
      console.log(error);
    }
};

deleteProjectsController = async (req, res) => {
    try {
      const { id } = req.params;

      const response = await deleteProjectService(id);
  
      res.status(200).json({ msg: "Projeto deletado com sucesso!", response });
    } catch (error) {
      console.log(error);
    }
  };
  

module.exports = {
  createProjectController,
  getProjectsController,
  updateProjectController,
  deleteProjectsController
};
