const express = require("express");
const mongoose = require("mongoose");
const profile = require("./routes/api/profile");
const bodyParser = require("body-parser");

//Using express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//DB Config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("CRUD"));

app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port 5000"));
