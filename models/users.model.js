const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  image: [
    {
      url: String,
      filename: String,
    },
  ],
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  noPhone: {
    type: Number,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
