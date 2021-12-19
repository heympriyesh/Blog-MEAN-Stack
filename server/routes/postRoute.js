const express = require('express');
const router = express.Router();
const multer = require('multer');
const { post, getBlogData } = require('../controllers/postController');
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // console.log('file in filename', file);
    const ext = file.mimetype.split('/')[1];
    cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});
router.get('/', getBlogData);
router.post('/', upload.single('image'), post);

module.exports = router;
