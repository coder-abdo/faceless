import { model, Schema } from "mongoose";

const userModel = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    friends: {
      type: Array,
      default: [],
    },
    picturePath: {
      type: String,
      default: "",
    },
    location: String,
    occupation: String,
    imperssions: Number,
    viewedProfile: Number,
  },
  { timestamps: true }
);

export const User = model("User", userModel);
