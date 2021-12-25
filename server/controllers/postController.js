const Post = require('../models/Post');
const User = require('../models/User');
const path = require('path');
const fs = require('fs');

module.exports.post = async (req, res, next) => {
  const { content, title, description } = req.body;
  const id = req.user.id;
  try {
    var obj = {
      title: title,
      content: content,
      description: description,
      image: req.file.filename,
      mimetype: req.file.mimetype,
      user: id,
    };
    Post.create(obj, (err, item) => {
      if (err) {
        console.log('post time error', err);
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

module.exports.getAllBlogData = async (req, res, next) => {
  console.log('The value of req,', req.user);
  try {
    let find = await Post.find({}).sort({ _id: -1 }).populate({
      path: 'user',
      select: 'name',
    });

    res.status(200).json({
      success: true,
      message: 'Blog Data Found',
      data: {
        data: find,
        total: find.length,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
    console.log('error');
  }
};

module.exports.singleBlog = async (req, res, next) => {
  const { id } = req.params;
  console.log('id', id);
  try {
    const singleBlog = await Post.findById(id).populate({
      path: 'user',
      select: 'name',
    });

    if (!singleBlog) {
      return res.status(400).json({
        success: false,
        message: 'Blog Not Found',
      });
    }
    res.status(200).json({
      success: true,
      data: singleBlog,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err,
    });
  }
};

module.exports.deleteBlogData = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteBlog = await Post.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      data: deleteBlog,
    });
    console.log('deleteBlog', deleteBlog);
  } catch {
    res.status(400).json({
      success: false,
      error: 'Something went wrong',
    });
  }
};
