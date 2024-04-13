const mongoose = require("mongoose");
const isEmail = require("validator").isEmail;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    unique: [true, "user name has been registered"],
    required: [true, "user name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email has been registered"],
    lowercase: [true, "invalid email"],
    validate: [isEmail, "invalid email"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  blogs: {
    type: Array,
  }
});

const User = mongoose.model("users", userSchema);

module.exports = User;
