const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected :${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log('catch error'.red.bold, err);
  }
};
module.exports = connectDB;
