const express = require("express");
const mongoose = require("mongoose");
const Path = require("path");
const cors = require("cors");
require("dotenv/config");
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const recipeRoute = require("./routes/api/recipeItems");
const authRoute = require("./routes/api/auth");

//Use routes
app.use("/api/recipeItems", recipeRoute);
app.use("/api/users", authRoute);

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("coonected to DB!");
  }
);

//deploy
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
