const mongoose = require("mongoose");

const fellowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.Fellow || mongoose.model("Fellow", fellowSchema);
