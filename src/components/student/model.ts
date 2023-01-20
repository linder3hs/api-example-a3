import { Schema, model } from "mongoose";

const studentScheme = new Schema({
  name: {
    require: false,
    type: String,
  },
  lastname: {
    require: false,
    type: String,
  },
  email: {
    require: false,
    type: String,
  },
  dni: {
    require: false,
    type: String,
  },
  address: {
    require: false,
    type: String,
  },
  phone: {
    require: false,
    type: String,
  },
  status: {
    require: false,
    type: Boolean,
  },
});

const Student = model("Student", studentScheme);

export default Student;
