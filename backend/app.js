const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/usersRoute");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome",
  });
});

app.use("/api/user", userRoute);
app.use("/api/decks", userRoute);
app.use("/api/flashcards", userRoute);
module.exports = app;
