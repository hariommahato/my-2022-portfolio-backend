import mongoose, { mongo } from "mongoose";
import ContactModel from "../models/contact.js";

export const createContact = async (req, res) => {
  const contact= req.body;
  const newContact = new ContactModel({
    ...contact,
  });
  try {
    await newContact.save();
    res.status(202).json(newContact);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact= await ContactModel.findById(id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, message } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: `No Contact  Find with id ${id}` });
    }

    const updatedContact = {
      name,
      email,
      message,
      _id: id,
    };
    await ContactModel.findByIdAndUpdate(id, updatedContact, { new: true });
    res.json(updatedContact);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No Contact exist with id: ${id}` });
    }
    await ContactModel.findByIdAndRemove(id);
    res.json({ message: "Contact  deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
