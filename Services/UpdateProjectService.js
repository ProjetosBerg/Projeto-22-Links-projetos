const Project = require("../models/Project");

const updateProjectService = async (id, data) => {
  try {
    if (!data) {
      throw new Error("data is required");
    }

    const updateProject = {};

    if (data.name) updateProject.name = data.name;

    if (data.repository) updateProject.repository = data.repository;

    if (data.language) updateProject.language = data.language;

    if (data.link) updateProject.link = data.link;

    const response = await Project.findByIdAndUpdate(id, updateProject, {
      new: true,
    });
    return response;
  } catch (error) {}
};

module.exports = {updateProjectService}