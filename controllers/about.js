import mongoose, { mongo } from "mongoose";
import AboutModel from "../models/about.js";

export const createAbout = async (req, res) => {
  const about = req.body;
  const newAbout = new AboutModel({
    ...about,
  });
  try {
    await newAbout.save();
    res.status(202).json(newAbout);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getAbouts = async (req, res) => {
  try {
    const abouts = await AboutModel.find();
    res.status(200).json(abouts);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getAbout = async (req, res) => {
  const { id } = req.params;
  try {
    const about = await AboutModel.findById(id);
    res.status(200).json(about);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateAbout = async (req, res) => {
  const { id } = req.params;
  const { name, description, image } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: `No About Find with id ${id}` });
    }

    const updatedAbout = {
      name,
      description,
      image,
      _id: id,
    };
    await AboutModel.findByIdAndUpdate(id, updatedAbout, { new: true });
    res.json(updatedAbout);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const deleteAbout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No tour exist with id: ${id}` });
    }
    await AboutModel.findByIdAndRemove(id);
    res.json({ message: "Tour deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
