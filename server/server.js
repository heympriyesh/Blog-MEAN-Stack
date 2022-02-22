const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const fs = require("fs");
var multer = require("multer");
const Post = require("./models/Post");
var path = require("path");

//Load env
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");
const draftRoute = require("./routes/draftRotue");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static(`${__dirname}/uploads`));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".")[1];
    cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({
    storage: multerStorage,
    fileFilter: fileFilter,
    limits: { fileSize: 5000000 },
  }).single("image")
);

app.use("/auth", authRoute);
app.use("/blog", postRoute);
app.use("/draft", draftRoute);
let root = path.join(__dirname, "../client/dist/");
app.use(express.static(root));
app.use(function (req, res, next) {
  if (
    req.method === "GET" &&
    req.accepts("html") &&
    !req.is("json") &&
    !req.path.includes(".")
  ) {
    res.sendFile("index.html", { root });
  } else next();
});

// app.get("*", (req, res) => {
//   // console.log(path.join(__dirname, "./client/dist/index.html"));
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

const PORT = process.env.PORT || 8800;

const server = app.listen(process.env.PORT || 8800, () => {
  // console.log(
  //   `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  // );
  console.log("Server is up and running");
});
