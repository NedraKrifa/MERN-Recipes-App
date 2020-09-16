const mongoose = require("mongoose");
const data = require('../config.json');
const RecipeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: data.defaultRecipeImage,
  },
  instructions: {
    type: String,
    required: true,
  },
  author: {
      type: String,
      required: true
  },
  date: {
      type: Date,
      default: Date.now,
  }
});

module.exports = mongoose.model("recipeitems", RecipeSchema);
