import mongoose from "mongoose";
import ProjectModel from "../models/project.js";

export const createProject = async (req, res) => {
  const project = req.body;
  const newProject = new ProjectModel({
    ...project,
  });
  try {
    await newProject.save();
    res.status(202).json(newProject);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await ProjectModel.findById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description, image, projectLink } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: `No Project Find with id ${id}` });
    }

    const updatedProject = {
      name,
      description,
      image,
      projectLink,
      _id: id,
    };
    await ProjectModel.findByIdAndUpdate(id, updatedProject, { new: true });
    res.json(updatedProject);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No Project exist with id: ${id}` });
    }
    await ProjectModel.findByIdAndRemove(id);
    res.json({ message: "Project Deleted Successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
