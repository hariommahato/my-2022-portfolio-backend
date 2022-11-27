import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
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
});

const AboutModel =mongoose.model("About",aboutSchema);
export default AboutModel;