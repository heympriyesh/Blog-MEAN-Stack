const Post = require('../models/Post');
const path = require('path');
const fs = require('fs');

module.exports.post = async (req, res, next) => {
  const { content, title } = req.body;
  try {
    var obj = {
      title: title,
      content: content,
      image: req.file.filename,
      mimetype: req.file.mimetype,
    };
    Post.create(obj, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          success: true,
          message: 'Blog Published Successfully...',
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Something Went wrong..',
      err: err,
    });
    console.log('error');
  }
};

module.exports.getBlogData = async (req, res, next) => {
  try {
    let find = await Post.find({});
    res.status(200).json({ post: find });
    // console.log(find[0].content);
    // let val = await find[0].content;
    // res.json({ image: find[0].thumbnailimage.data });
  } catch {
    console.log('error');
  }
};
