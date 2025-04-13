const express = require("express");
const flashcardController = require("./../controllers/flashcardController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(authController.protect, flashcardController.getAllFlashcards)
  .post(authController.protect, flashcardController.createFlashcard);

router
  .route("/:id")
  .get(authController.protect, flashcardController.getFlashcard)
  .patch(authController.protect, flashcardController.updateFlashcard)
  .delete(authController.protect, flashcardController.DeleteFlashcard);

module.exports = router;
