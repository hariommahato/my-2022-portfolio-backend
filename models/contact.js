import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

const ContactModel =mongoose.model("Contact",contactSchema);
export default ContactModel;