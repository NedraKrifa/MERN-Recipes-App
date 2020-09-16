const express = require("express");
const router = express.Router();
const Recipe = require("../../models/Recipe");
const verify = require('../middleware/verifyToken');

//[Get] Get all items:public
router.get("/", async (req, res) => {
  try {
    const items = await Recipe.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.json({ message: err });
  }
});

//[Post] Submit item:private
router.post("/", verify, async (req, res) => {
  const item = new Recipe({
    title: req.body.title,
    image: req.body.image,
    instructions: req.body.instructions,
    author: req.body.author,
  });
  try {
    const saveditem = await item.save();
    res.json(saveditem);
  } catch (err) {
    res.json({ message: err });
  }
});

//[Get] Specific item:public
router.get("/:itemId", async (req, res) => {
  try {
    const item = await Recipe.findById(req.params.itemId);
    res.json(item);
  } catch (err) {
    res.json({ message: err });
  }
});

//[Delete] Delete item:private
router.delete("/:itemId", verify, async (req, res) => {
  try {
    const removedItem = await Recipe.remove({ _id: req.params.itemId });
    res.json(removedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

//[Patch] Update a item
router.patch("/:itemId", verify, async (req, res) => {
  try {
    const updatedItem = await Recipe.updateOne(
      { _id: req.params.itemId },
      {
        $set: {
          title: req.body.title,
          image: req.body.image,
          instructions: req.body.instructions,
          author: req.body.author,
        },
      }
    );
    res.json(updatedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
