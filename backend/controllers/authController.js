const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const crypto = require("crypto");
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

// Inside your AuthController.js

// Consistent Cookie Options
const getCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    domain: isProduction ? ".flashnest.app" : undefined, // Only set domain in production
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: "/",
  };
};

// Central Token Sending
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, getCookieOptions());

  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: { user },
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
    console.log("Sending email to:", newUser.email);
    console.log("Email content:", message);

    await sendEmail({
      to: newUser.email,
      subject: "Welcome to FlashNest",
      html: message,
    });
  } catch (err) {
    console.error("Email sending failed 💥:", err);
  }

  // Send only token and success status
  const token = signToken(newUser._id);
  res.cookie("jwt", token, getCookieOptions());

  res.status(201).json({
    status: "success",
    token,
  });
});

// complete the login authentication
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Invalid email or password", 401));
  }

  // Send only token and success status
  const token = signToken(user._id);
  res.cookie("jwt", token, getCookieOptions());

  res.status(200).json({
    status: "success",
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  // 1) Get token from either header or cookies
  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You are not logged in. Please login to get access.", 401)
    );
  }

  // 2) Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError("The user belonging to this token no longer exists.", 401)
    );
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please login again.", 401)
    );
  }

  // Grant access to protected route
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

  res.cookie("jwt", token, getCookieOptions()); // 🔥 Pass req

  res.redirect("http://localhost:3000/dashboard");
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  //1 Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email }); // ✅ Fixed: Added `await`
  if (!user) {
    return next(new AppError("No user found with this email", 404));
  }
  // 2) Generate random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send response (or send email with reset token)
  const frontendURL = `http://localhost:3000/reset-password?token=${resetToken}`;
  const message = `You are receiving this email because you (or someone else) has requested a password reset for your account.\n\nPlease click on the following link to reset your password:\n\n${frontendURL}\n\nIf you did not request this, please ignore this email and no changes will be made.\n`;

  try {
    await sendEmail({
      to: user.email,
      subject: "Password reset token (valid for 10 minutes)",
      html: message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError(
        "There was an error sending the email. Try again later!",
        500
      )
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  // 2) if token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();
  // 3) Update change passwordAt property for the user

  // 4) Log the user in, send JWT
  createSendToken(user, 200, req, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from the collection
  const user = await User.findById(req.user.id).select("+password");

  // 2) check if Posted current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Incorrect current password", 401));
  }

  // 3)if so, update the password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // 4) Log the user in, send JWT
  createSendToken(user, 200, req, res);
});
