const express = require("express");
const flashcardController = require("./../controllers/flashcardController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

// GET all or POST single flashcard for a deck
router
  .route("/")
  .get(authController.protect, flashcardController.getAllFlashcards)
  .post(authController.protect, flashcardController.createFlashcard);

// ✅ BULK create flashcards for the deckId in params
router
  .route("/bulk")
  .post(authController.protect, flashcardController.bulkCreateFlashcards);

// Single flashcard operations by ID
router
  .route("/:id")
  .get(authController.protect, flashcardController.getFlashcard)
  .patch(authController.protect, flashcardController.updateFlashcard)
  .delete(authController.protect, flashcardController.DeleteFlashcard);

module.exports = router;
