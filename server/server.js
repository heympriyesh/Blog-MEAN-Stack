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

app.use("/auth", authRoute);
app.use("/blog", postRoute);
app.use("/draft", draftRoute);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
const PORT = process.env.PORT || 8800;

const server = app.listen(process.env.PORT || 8800, () => {
  console.log(
    `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
