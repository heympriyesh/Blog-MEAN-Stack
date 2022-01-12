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
  description: {
    type: String,
    require: [true, 'Please add a Description'],
  },
  image: {
    type: String,
    required: [true, 'Please add a thumbnail Image'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = new mongoose.model('Post', postSchema);
