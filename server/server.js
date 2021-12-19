const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
var multer = require('multer');
const Post = require('./models/Post');
var path = require('path');

//Load env
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static(`${__dirname}/uploads`));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     console.log('file in filename', file);
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
//   },
// });

// const upload = multer({
//   storage: multerStorage,
// });

app.use('/auth', authRoute);
app.use('/blog', postRoute);
const PORT = process.env.PORT || 8800;
const server = app.listen(process.env.PORT || 8800, () => {
  console.log(
    `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
