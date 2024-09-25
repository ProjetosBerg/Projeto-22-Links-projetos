const Project = require("../models/Project");

const getAllProjectsService = async ({params}) => {
    console.log("params.", params);
    if(params){
        const projects = await Project.find({repository: params});
        return projects
    }else {
        const projects = await Project.find();
        return projects;
    }
};

module.exports = { getAllProjectsService }