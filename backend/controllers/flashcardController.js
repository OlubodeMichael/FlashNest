const Flashcard = require("./../models/Flashcard");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllFlashcards = catchAsync(async (req, res, next) => {
  const flashcards = await Flashcard.find({ userId: req.user._id });

  res.status(200).json({
    status: "success",
    result: flashcards.length,
    data: {
      flashcards,
    },
  });
});

exports.createFlashcard = catchAsync(async (req, res, next) => {
  const { question, answer, deckId } = req.body;

  const newFlashcard = await Flashcard.create({
    question,
    answer,
    deckId, // optional – only include if user is using decks
    userId: req.user._id,
  });

  res.status(201).json({
    status: "success",
    data: {
      flashcard: newFlashcard,
    },
  });
});

exports.getFlashcard = catchAsync(async (req, res, next) => {
  const flashcard = await Flashcard.findById(req.params.id);

  if (!flashcard) {
    return next(new AppError("No flashcard found with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      flashcard,
    },
  });
});

exports.updateFlashcard = catchAsync(async (req, res, next) => {
  const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!flashcard) {
    return next(new AppError("No flashcard found with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      flashcard,
    },
  });
});

exports.DeleteFlashcard = catchAsync(async (req, res, next) => {
  const flashcard = await Flashcard.findByIdAndDelete(req.params.id);

  if (!flashcard) {
    return next(new AppError("No flashcard found with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});
