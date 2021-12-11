const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse('Please Provide an email and password', 400));
  }
  // Checking for user
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Checking if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

exports.signup = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  console.log('name', name);
  //Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  sendTokenResponse(user, 200, res);
});

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
  if (user.role === 'user') {
    roleId = 1;
  } else {
    roleId = 2;
  }
  res.status(statusCode).json({
    success: true,
    token,
    roleId,
  });
};
