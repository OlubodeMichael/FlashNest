const Deck = require("./../models/Deck");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllDecks = catchAsync(async (req, res, next) => {
  let decks = await Deck.find({ userId: req.user._id });

  res.status(200).json({
    status: "success",
    result: decks.length,
    data: {
      decks,
    },
  });
});

exports.createDeck = catchAsync(async (req, res, next) => {
  const newDeck = await Deck.create({
    ...req.body,
    userId: req.user._id,
  });

  res.status(200).json({
    status: "success",
    data: {
      deck: newDeck,
    },
  });
});

exports.getDeck = catchAsync(async (req, res, next) => {
  const deck = await Deck.findById(req.params.id);

  if (!deck) {
    return next(new AppError("No deck found with this ID", 404));
  }
});

exports.updateDeck = catchAsync(async (req, res, next) => {
  const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!deck) {
    return next(new AppError("No deck found with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      deck,
    },
  });
});

exports.deleteDeck = catchAsync(async (req, res, next) => {
  const deck = await Deck.findByIdAndDelete(req.params.id);

  if (!deck) {
    return next(new AppError("No deck found with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});
