const Post = require("../models/Post");
const User = require("../models/User");
const path = require("path");
const fs = require("fs");

module.exports.post = async (req, res, next) => {
  const { content, title, description } = req.body;
  const id = req.user.id;
  let creator;
  try {
    const post = await new Post({
      title: title,
      content: content,
      description: description,
      image: req.file.filename,
      user: id,
    });
    await post.save();
    let user = await User.findById(req.user.id);
    creator = user;
    await user.posts.push(post);
    await user.save();
    res.status(201).json({
      message: "Blog Published Successfully",
      post: post,
      creator: { _id: creator._id, name: creator.name },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports.getAllBlogData = async (req, res, next) => {
  try {
    let find = await Post.find({}).sort({ _id: -1 }).populate({
      path: "user",
      select: "name image",
    });

    res.status(200).json({
      success: true,
      message: "Blog Data Found",
      data: {
        data: find,
        total: find.length,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

module.exports.singleBlog = async (req, res, next) => {
  const { id } = req.params;
  try {
    const singleBlog = await Post.findById(id).populate({
      path: "user",
      select: "name",
    });

    if (!singleBlog) {
      return res.status(400).json({
        success: false,
        message: "Blog Not Found",
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
    let post = await Post.findById(id);
    if (!post) {
      const error = new Error("Could not Find post.");
      error.statusCode = 404;
      throw error;
    }
    if (post.user.toString() !== req.user.id) {
      const error = new Error("Not authorized!");
      error.statusCode = 403;
      throw error;
    }
    clearImage(post.image);
    await Post.findByIdAndRemove(id);
    let user = await User.findById(req.user.id);
    await user.posts.pull(id);
    await user.save();
    res.status(200).json({
      message: "Blog Deleted",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports.updateBlog = async (req, res, next) => {
  const id = req.params.id;
  const { title, description, content } = req.body;
  let image = req.body.image;
  try {
    if (req.file) {
      image = req.file.filename;
    }
    if (!image) {
      const error = new Error("No File picked.");
      error.statusCode = 422;
      throw error;
    }
    let post = await Post.findById(id);
    if (!post) {
      const error = new Error("Could not find post.");
      error.statusCode = 404;
      throw error;
    }
    if (post.user.toString() !== req.user.id) {
      const error = new Error("Not Authorized!");
      error.statusCode = 403;
      throw error;
    }
    if (image !== post.image) {
      clearImage(post.image);
    }
    post.title = title;
    post.image = image;
    post.description = description;
    post.content = content;
    let result = await post.save();
    res.status(200).json({
      message: "Post updated!",
      post: result,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const clearImage = (filePath) => {
  filePath = path.join(__dirname, "../uploads", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
