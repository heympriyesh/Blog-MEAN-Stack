const express = require('express');
const router = express.Router();
const multer = require('multer');
const { protect } = require('../middleware/authMiddleware');
const {
  post,
  getAllBlogData,
  deleteBlogData,
  singleBlog,
  updateBlog,
} = require('../controllers/postController');
const path = require('path');
const fs = require('fs');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.')[1];
    cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});
router.post('/', protect, upload.single('image'), post);
router.get('/', getAllBlogData);
router.get('/:id', singleBlog);
router.delete('/:id', protect, deleteBlogData);
router.put('/:id', protect, upload.single('image'), updateBlog);

module.exports = router;
