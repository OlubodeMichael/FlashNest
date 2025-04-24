require("./config/passport");
const express = require("express");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
// const xss = require("xss-clean");
// const mongoSanitize = require("express-mongo-sanitize");

const userRoute = require("./routes/usersRoute");
const decksRoute = require("./routes/DecksRoute");
const flashcardsRoute = require("./routes/flashcardsRoute");
const aiRoute = require("./routes/aiRoute");

const app = express();

// 🔐 Security middlewares
app.use(helmet());
app.use(
  rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: "Too many requests from this IP, please try again in an hour",
  })
);
// app.use(xss());            // Optional: Prevent XSS attacks
// app.use(mongoSanitize());  // Optional: Prevent NoSQL injection
app.use(hpp()); // Prevent HTTP parameter pollution

// 🌐 CORS setup
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// 🛠️ Other middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// 📦 Routes
app.use("/api/users", userRoute);
app.use("/api/decks", decksRoute);
app.use("/api/flashcards", flashcardsRoute);
app.use("/api/ai", aiRoute);

// 🛑 Global error handler
app.use((err, req, res, next) => {
  console.error("ERROR 💥", err);
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message || "Something went wrong",
  });
});

module.exports = app;
