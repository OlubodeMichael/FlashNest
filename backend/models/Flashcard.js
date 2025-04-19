const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    deckId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Deck",
      required: true, // ✅ or set to false if you want to allow ungrouped flashcards
    },
    question: {
      type: String,
      required: [true, "Flashcard must have a question"],
    },
    answer: {
      type: String,
      required: [true, "Flashcard must have an answer"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Flashcard = mongoose.model("Flashcard", flashcardSchema);
module.exports = Flashcard;
