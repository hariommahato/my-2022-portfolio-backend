import express from 'express';
const router =express.Router()

import {createProject,getProject,getProjects,deleteProject, updateProject} from '../controllers/Project.js'

router.get("/",getProjects);
router.get("/:id", getProject);
router.post("/",createProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
