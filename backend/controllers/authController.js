const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("./../models/User");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");

const signToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signUp = catchAsync(async (req, res, next) => {
  // get the user information from the request
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax", // or 'None' if cross-site in production
  });
  res.status(201).json({
    status: "success",
    token,
    user: {
      user: newUser,
    },
  });
});

// complete the login authentication
exports.login = catchAsync(async (req, res, next) => {
  //get email and password from the request
  const { email, password } = req.body;

  // check if the email and password exist
  if (!email || !password) {
    return next(new AppError("Provided email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Invlaid in email or password", 401));
  }

  const token = signToken(user);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax", // or 'None' if cross-site in production
  });
  res.status(200).json({
    status: "success",
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  // get token
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt; // ✅ Pull from cookies
  }

  if (!token) {
    return next(
      new AppError("You are not logged in. Please login to get access.", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // verify token
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      new AppError("User belonging to this token no longer exists.", 401)
    );
  }

  if (currentUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please login again.", 401)
    );
  }

  req.user = currentUser;
  next();
});

// Add logout function
exports.logout = (req, res) => {
  res.cookie("jwt", "", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};
