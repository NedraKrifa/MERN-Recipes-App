const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../../models/User");
const { registerValidation, loginValidation } = require("../../validation");
const verify = require("../verifyToken");

//registration
router.post("/register", async (req, res) => {
  const { name, email, password, confirm_password } = req.body;

  //LETS VALIDATE THE DATA BEFORE WE ADD A USER
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if the user is already in the database
  const emailExist = await User.findOne({ email });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //create a new user
  const user = new User({
    name,
    email,
    password: hashPassword,
    confirm_password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    //create and assign a token
    const token = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET);
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //LETS VALIDATE THE DATA BEFORE WE A USER
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if the email exists
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("Email is not found");

  //PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  try {
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Get user:private
router.get('/user', verify, async (req, res) => {
    try {
      const user = await User.findById(req.user._id).select('-password').select('-confirm_password');
      if (!user) return res.status(400).send('User Does not exist');
      res.json(user);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

module.exports = router;
