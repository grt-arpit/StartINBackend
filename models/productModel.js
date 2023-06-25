const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  name: String,
  description: String,
  image: { type: String, default: "" },
  video: { type: String, default: "" },
  startup:{ type: Types.ObjectId, ref: "startup" },
  createdAt: Date,
});

module.exports = model("services", schema);