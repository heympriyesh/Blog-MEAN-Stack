const User = require("../models/User");
const Draft = require("../models/PostDraft");
const Post = require("../models/Post");
const path = require("path");
const fs = require("fs");
const { post } = require("./postController");

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
    draft
      .save()
      .then((result) => {
        return User.findById(req.user.id);
      })
      .then((user) => {
        creator = user;
        user.drafts.push(draft);
        return user.save();
      })
      .then((result) => {
        res.status(200).json({
          message: "Blog Saved in Drafts",
          draft: draft,
          creator: { _id: creator._id, name: creator.name },
        });
      });
  } catch (err) {
    res.status(400).send(err);
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
    res.send(err);
  }
};

exports.getSingleDraft = async (req, res, next) => {
  const { id } = req.params;
  // console.log("id", id);
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
    res.status(400).json({
      success: false,
      err: err,
    });
  }
};

exports.deleteDraft = async (req, res, next) => {
  const { id } = req.params;
  Draft.findById(id)
    .then((draft) => {
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
      return Draft.findByIdAndRemove(id);
    })
    .then((result) => {
      return User.findById(req.user.id);
    })
    .then((user) => {
      user.drafts.pull(id);
      return user.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Draft Deleted",
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateDraft = (req, res, next) => {
  const id = req.params.id;
  const { title, description, content } = req.body;
  let image = req.body.image;
  if (req.file) {
    console.log("req.file", req.file);
    image = req.file.filename;
  }
  if (!image) {
    const error = new Error("No File picked.");
    error.statusCode = 422;
    throw error;
  }
  Draft.findById(id)
    .then((post) => {
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
      return post.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Draft updated!",
        post: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.publishDraft = async (req, res, next) => {
  const { id } = req.params;
  try {
    const draft = await Draf.findById(id);
    console.log("publish draft", draft);
  } catch (err) {}
};

const clearImage = (filePath) => {
  console.log("filePath", filePath);
  filePath = path.join(__dirname, "../uploads", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
