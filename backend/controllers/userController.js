const User = require("./../models/User");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getUser = catchAsync(async (req, res, next) => {});

// only user information and not password
exports.updateUser = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword",
        400
      )
    );
  }
});

exports.createUser = catchAsync(async (req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!  Please use /signup instead",
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {});
