const { Schema, model } = require("../connection");

const schema = new Schema({
  name: String,
  phone: Number,
  email: String,
  subject: String,
  message: String,
});

module.exports = model("contact", schema);
