const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');

//Load env
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

const authRoute = require('./routes/authRoute');
const app = express();
app.use(express.json());

app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/auth', authRoute);
const PORT = process.env.PORT || 8800;
const server = app.listen(PORT, () => {
  console.log(
    `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
