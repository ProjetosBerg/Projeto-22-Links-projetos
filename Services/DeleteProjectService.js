const Project = require("../models/Project");

const deleteProjectService = async (id) => {
    const project = await Project.findByIdAndDelete(id);
    return project;
};

module.exports = { deleteProjectService }