const {
  login,
  signup,
  resetPassword,
  getMe,
  myBlog,
  updateDetails,
  updatePassword,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();
const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".")[1];
    cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

router.get("/getMe", protect, getMe);
router.get("/myBlogs", protect, myBlog);
router.get("/myDraft");
router.post("/signup", signup);
router.post("/login", login);
router.post("/resetPassword", resetPassword);
router.put("/update-details", protect, upload.single("image"), updateDetails);
router.put("/upate-password", protect, updatePassword);
// router.put('/reset-password',)

module.exports = router;
