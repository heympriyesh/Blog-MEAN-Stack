const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;
  // console.log('req header value', req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    // console.log('token the value of token');
  }
  if (!token) {
    res.status(401).json({
      message: 'Not Authorize to access this route',
    });
    // return next(new ErrorResponse('Not Authorize to access this route', 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);

    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: 'Not Authorize to access this route',
    });
    // return next(new ErrorRespone('Not Authorize to access this route', 401));
  }
};
