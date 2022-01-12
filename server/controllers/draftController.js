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
        res.statu(200).json({
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
  try {
    let blog = await Draft.find({}).sort({ _id: -1 }).populate({
      path: "user",
      select: "name",
    });
    res.status(200).json({
      success: true,
      message: "Draft Data Found",
      data: {
        data: blog,
        total: blog.length,
      },
    });
  } catch (err) {
    res.send(400).json({
      error: err,
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

exports.updateDraft = (req, res, next) => {};

exports.publishDraft = (req, res, next) => {};

const clearImage = (filePath) => {
  console.log("filePath", filePath);
  filePath = path.join(__dirname, "../uploads", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
