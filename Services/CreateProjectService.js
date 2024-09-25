const Project = require("../models/Project");

const createProjectService = async (data) => {
    const project = await Project.create(data);
    return project;
};

module.exports = { createProjectService }