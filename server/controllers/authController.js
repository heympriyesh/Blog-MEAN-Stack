const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Post = require("../models/Post");
const mongoose = require("mongoose");

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please Provide an email and password", 400));
  }
  // Checking for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // Checking if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

exports.signup = asyncHandler(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password != confirmPassword) {
    return next(
      new ErrorResponse("password and confirmpassword must be same", 400)
    );
  }
  //Create user
  const user = await User.create({
    name,
    email,
    password,
  });
  sendTokenResponse(user, 200, res);
});

exports.resetPassword = asyncHandler(async (req, res, next) => {
  const { password, confirmPasssword } = req.body;
});

exports.getMe = async (req, res, next) => {
  const id = req.user.id;
  const user = await User.findById(id).select("email name image");
  if (!user) {
    res.status(401).json({
      success: false,
      message: "User not Found",
    });
  }
  res.status(200).json({
    success: true,
    data: user,
  });
};

exports.myBlog = async (req, res, nex) => {
  const id = req.user.id;
  try {
    let blog = await User.findById(id).populate({
      path: "posts",
    });
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    res.send(err);
  }
};

exports.updateDetails = async (req, res, next) => {
  const id = req.user.id;
  const { name, email } = req.body;
  let image = req.body.image;
  try {
    if (req.file) {
      image = req.file.filename;
    }
    const user = await User.findById(id);
    user.name = name;
    user.email = email;
    if (image) {
      user.image = image;
    }

    await user.save();
    res.status(200).json({
      message: "Profile Updated",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

// exports.updatePassword=async(req,res,next)=>{

// }
// exports.resetPassword=async (req,res,next)=>{

// }

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  // To Store token in cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 1000
    ),
    httpOnly: true,
  };
  let roleId;
  let imageUrl = user.image;
  if (user.role === "user") {
    roleId = 1;
  } else {
    roleId = 2;
  }

  res.status(statusCode).json({
    success: true,
    token,
    roleId,
    imageUrl,
  });
};
