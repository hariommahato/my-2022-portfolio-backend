import express from 'express';
const router =express.Router()

import {createAbout,getAbout,getAbouts,deleteAbout,updateAbout} from '../controllers/about.js'

router.get("/",getAbouts);
router.get("/:id", getAbout);
router.post("/",createAbout);
router.patch("/:id", updateAbout);
router.delete("/:id", deleteAbout);

export default router;
