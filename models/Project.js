const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjetctSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  repository: {
    type: String,
    required: true,
  },
  language: {
    type: [String],
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  
}, { timestamps: true });


module.exports = mongoose.model("Project", ProjetctSchema);
