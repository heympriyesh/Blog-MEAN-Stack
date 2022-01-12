const mongoose = require('mongoose');

const draftSchema = new mongoose.Schema({
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
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = new mongoose.model('Draft', draftSchema);
