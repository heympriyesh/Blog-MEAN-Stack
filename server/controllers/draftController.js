const User = require("../models/User");
const Draft = require("../models/PostDraft");
const Post = require("../models/Post");
const path = require("path");
const fs = require("fs");

exports.saveDraft = async (req, res, next) => {
  const { content, title, description } = req.body;
  const id = req.user.id;
  let creator;
  try {
    const draft = new Draft({
      title: title,
      content: content,
      description: description,
      image: req.file.filename,
      user: id,
    });
    await draft.save();
    let user = await User.findById(req.user.id);
    creator = user;
    await user.drafts.push(draft);
    await user.save();
    res.status(200).json({
      message: "Blog Saved in Drafts",
      draft: draft,
      creator: { _id: creator._id, name: creator.name },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getAllDraft = async (req, res, next) => {
  const id = req.user.id;
  try {
    let blog = await User.findById(id).populate({
      path: "drafts",
    });
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getSingleDraft = async (req, res, next) => {
  const { id } = req.params;
  try {
    const singleDraft = await Draft.findById(id).populate({
      path: "user",
      select: "name",
    });

    if (!singleDraft) {
      return res.status(400).json({
        success: false,
        message: "Blog Not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: singleDraft,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteDraft = async (req, res, next) => {
  const { id } = req.params;
  try {
    let draft = await Draft.findById(id);
    if (!draft) {
      const error = new Error("Could not Find the post");
      error.statusCode = 404;
      throw error;
    }
    if (draft.user.toString() !== req.user.id) {
      const error = new Error("Not Authorized");
      error.statusCode = 403;
      throw error;
    }
    clearImage(draft.image);
    await Draft.findByIdAndRemove(id);
    let user = await User.findById(req.user.id);
    await user.drafts.pull(id);
    await user.save();
    res.status(200).json({
      message: "Draft Deleted",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateDraft = async (req, res, next) => {
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
    let post = await Draft.findById(id);
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
      message: "Draft updated!",
      post: result,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.publishDraft = async (req, res, next) => {
  const { id } = req.params;
  try {
    const draft = await Draft.findById(id);
    const { content, title, description, image } = draft;
    let creator;
    const post = await new Post({
      title: title,
      content: content,
      description: description,
      image: image,
      user: req.user.id,
    });
    await post.save();
    let user = await User.findById(req.user.id);
    creator = user;
    await user.posts.push(post);
    await user.drafts.pull(id);
    await user.save();
    await Draft.findByIdAndRemove(id);

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

const clearImage = (filePath) => {
  filePath = path.join(__dirname, "../uploads", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
