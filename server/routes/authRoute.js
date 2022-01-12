const {
  login,
  signup,
  resetPassword,
  getMe,
  myBlog,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const express = require('express');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/resetPassword', resetPassword);
router.get('/getMe', protect, getMe);
router.get('/myBlogs', protect, myBlog);
router.get('/myDraft');

module.exports = router;
