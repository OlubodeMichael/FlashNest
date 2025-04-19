const express = require("express");
const multer = require("multer");
const authController = require("../controllers/authController");
const aiController = require("../controllers/aiController");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// 🔁 PREVIEW flashcards (AI generates based on topic/text/file)
router.post(
  "/preview-flashcards",
  authController.protect,
  upload.single("file"),
  aiController.previewFlashcards
);

// ✅ SAVE flashcards after user accepts
/*
router.post(
  "/save-flashcards",
  authController.protect,
  aiController.saveFlashcards
);
*/
module.exports = router;
