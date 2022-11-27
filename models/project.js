import mongoose from "mongoose";

const projectSchema= mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  projectLink:{type: String},
});

const ProjectModel =mongoose.model("Project",projectSchema);
export default ProjectModel;