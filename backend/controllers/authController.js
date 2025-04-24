const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("./../models/User");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");
const welcomeEmailTemplate = require("./../config/templates/welcomeEmail");
const sendEmail = require("./../config/email");

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

  try {
    const message = welcomeEmailTemplate(req.body.firstName);
    console.log("Sending email to:", newUser.email); // 🔥 Add this
    console.log("Email content:", message); // 🔥 And this

    await sendEmail({
      to: newUser.email,
      subject: "Welcome to FlashNest",
      html: message,
    });
  } catch (err) {
    console.error("Email sending failed 💥:", err);
  }

  const token = signToken(newUser);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false, // No HTTPS in dev
    sameSite: "None", // Needed for cross-site (localhost → api.flashnest.app)
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
    secure: false, // No HTTPS in dev
    sameSite: "None", // Needed for cross-site (localhost → api.flashnest.app)
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
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    expires: new Date(0), // 👈 Expire the cookie immediately
  });

  res
    .status(200)
    .json({ status: "success", message: "Logged out successfully" });
};

exports.googleAuthCallback = catchAsync(async (req, res, next) => {
  const googleUser = req.user;

  if (!googleUser) {
    return next(new AppError("Google authentication failed", 401));
  }

  // ✅ Send email ONLY if first-time signup
  if (googleUser.isNewUser) {
    try {
      const message = welcomeEmailTemplate(googleUser.firstName);
      await sendEmail({
        to: googleUser.email,
        subject: "Welcome to FlashNest 🎉",
        html: message,
      });
    } catch (err) {
      console.error("Email sending failed 💥:", err);
    }
  }

  const token = signToken(googleUser);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.redirect("http://localhost:3000/dashboard");
});
