const mongoose = require("../db/driver");
const uniqueValidator = require("mongoose-unique-validator");

// Define the model
const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  isActive: { type: Boolean, required: true }
});

// Add Unique Validator Plugin
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
