const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
//const xss = require("xss-clean");
//const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

const userRoute = require("./routes/usersRoute");
const decksRoute = require("./routes/DecksRoute");
const flashcardsRoute = require("./routes/flashcardsRoute");
const aiRoute = require("./routes/aiRoute");

const app = express();
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // 1 hour
  message: "Too many requests from this IP, please try again in an hour",
});

app.use(helmet());
app.use("/api", limiter);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
//app.use(xss());
//app.use(mongoSanitize());
app.use(hpp());
app.use(
  cors({
    origin: "http://localhost:3000", // your frontend origin
    //origin: 'https://trans-loft.vercel.app',
    credentials: true, // 🔥 allow cookies to be sent
  })
);

app.use("/api/users", userRoute);
app.use("/api/decks", decksRoute);
app.use("/api/flashcards", flashcardsRoute);
app.use("/api/ai", aiRoute);

app.use((err, req, res, next) => {
  console.error("ERROR 💥", err);

  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message || "Something went wrong",
  });
});
module.exports = app;
