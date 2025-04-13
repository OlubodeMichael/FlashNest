const express = require("express");
const deckController = require("./../controllers/deckController");
const authController = require("./../controllers/authController");
const flashcardsRouter = require("./../routes/flashcardsRoute");

const router = express.Router();

// Placeholder routes - you can implement these later

router.use("/:deckId/flashcards", flashcardsRouter);
router
  .route("/")
  .get(authController.protect, deckController.getAllDecks)
  .post(authController.protect, deckController.createDeck);

router
  .route("/:id")
  .get(authController.protect, deckController.getDeck)
  .patch(authController.protect, deckController.updateDeck)
  .delete(authController.protect, deckController.deleteDeck);

module.exports = router;
