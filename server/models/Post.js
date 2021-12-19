const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a Title'],
  },
  content: {
    type: String,
    required: [true, 'Please add Content'],
  },
  image: {
    type: String,
    required: [true, 'Please add a thumbnail Image'],
  },
  mimetype: {
    type: String,
  },
});

module.exports = new mongoose.model('Post', postSchema);
