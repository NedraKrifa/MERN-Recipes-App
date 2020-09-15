const mongoose = require("mongoose");

const RecipeItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://photos.bigoven.com/recipe/hero/recipe-no-image.jpg?h=500&w=500",
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

module.exports = mongoose.model("recipeitems", RecipeItemSchema);
