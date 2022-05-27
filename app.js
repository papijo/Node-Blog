//Express App
const config = require("./utils/config");
const express = require("express");
const app = express();

//3rd Party Imports
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

//Middleware
app.use(express.json());
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use(express.static("build"));
//Route Import
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

//Database Connection
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful!!!!!");
  })
  .catch((error) => {
    console.log("Error Connecting to MongoDB:", error.message);
  });

//Image Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//Route Handling
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

module.exports = app;
