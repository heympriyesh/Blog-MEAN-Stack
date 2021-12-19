const {
  login,
  signup,
  resetPassword,
} = require('../controllers/authController');
const express = require('express');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/resetPassword', resetPassword);

module.exports = router;
