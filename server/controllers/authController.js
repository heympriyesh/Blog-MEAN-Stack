const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

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
  const { newPassword, confirmPassword } = req.body;
  if (newPassword !== confirmPassword) {
    res.status(400).json({
      message: "New Password and Confirm Password must be same",
    });
  }
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resettoken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorResponse("Invalid token", 400));
  }
  // console.log(req.body);

  // Set new password
  // console.log("user", user);
  user.password = newPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  sendTokenResponse(user, 200, res);
});

exports.getMe = async (req, res, next) => {
  const id = req.user.id;
  try {
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
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
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
    if (image != user.image) {
      clearImage(user.image);
    }
    if (image) {
      user.image = image;
    }

    await user.save();
    res.status(200).json({
      message: "Profile Updated",
      data: user,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updatePassword = async (req, res, next) => {
  const { confirmPassword, currentPassword, newPassword } = req.body;
  try {
    if (!confirmPassword || !currentPassword || !newPassword) {
      res.status(400).json({ message: "Fields cannot be empty" });
    }

    if (confirmPassword !== newPassword) {
      res.status(400).json({ message: "Confirm and NewPassword Must be same" });
    }

    if (currentPassword === newPassword) {
      res.status(400).json({
        message: "Current And new Password Cannot be same",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const updatedPassword = await bcrypt.hash(newPassword, salt);
    if (confirmPassword !== newPassword) {
      res.status(400).json({
        message: "Password Dosen't Match",
        success: false,
      });
    }
    if (confirmPassword === newPassword) {
      const user = await User.findById(req.user.id).select("+password");
      const auth = await bcrypt.compare(currentPassword, user.password);
      if (auth) {
        const userData = await User.updateOne(
          { _id: req.user.id },
          { $set: { password: updatedPassword } }
        );

        const token = user.getSignedJwtToken();

        res.status(200).json({
          message: "Password Updated Successfully",
          token: token,
          success: true,
        });
      } else {
        res.status(200).json({
          message: "Current Password Dosen't Match",
          success: false,
        });
      }
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.forgotPasword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json({
        message: "There is no user with that email",
      });
    }
    // Get reset token
    if (user) {
      const resetToken = user.getResetPasswordToken();
      await user.save({ validateBeforeSave: false });

      // Create reset url
      const resetUrl = `${process.env.RESET_PASSWORD_URL}/${resetToken}`;
      const message = `You are receiving this email because you (or someone else) has requested the rest of a password. Please make a PUT request to:\n\n <a href=${resetUrl}>Click here</a>`;

      await sendEmail({
        email: user.email,
        subject: "Password reset token",
        message,
        resetUrl,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    }
  } catch (err) {
    console.log(err);
    if (user) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });
    }

    return next(new ErrorResponse("Email could not be sent", 500));
  }
};

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

const clearImage = (filePath) => {
  filePath = path.join(__dirname, "../uploads", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
