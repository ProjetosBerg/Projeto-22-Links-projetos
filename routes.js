const express = require("express");
const { createProjectController, getProjectsController, updateProjectController, deleteProjectsController } = require("./controllers/ProjectController");
const router = express.Router();

router.post(
  "/",
  (req, res) => createProjectController(req, res)
);

router.get(
  "/",
  (req, res) => getProjectsController(req, res)
);

router.patch(
  "/:id",
  (req, res) => updateProjectController(req, res)
);

router.delete(
  "/:id",
  (req, res) => deleteProjectsController(req, res)
);

module.exports = router;
