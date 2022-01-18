const express = require("express");
const router = express.Router();
const multer = require("multer");
const { protect } = require("../middleware/authMiddleware");
const {
  saveDraft,
  deleteDraft,
  updateDraft,
  publishDraft,
  getAllDraft,
  getSingleDraft,
} = require("../controllers/draftController");

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.originalname.split(".")[1];
//     cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
//   },
// });

// const upload = multer({
//   storage: multerStorage,
// });

router.get("/get-all-draft", protect, getAllDraft);
router.get("/get-single-draft/:id", protect, getSingleDraft);
router.post("/save-draft", protect, saveDraft);
router.delete("/delete-draft/:id", protect, deleteDraft);
router.put("/update-draft/:id", protect, updateDraft);
router.post("/publish-draft/:id", protect, publishDraft);

module.exports = router;
