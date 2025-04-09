const express = require("express");
const authController = require("./../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);

router.route("/").get((req, res) => {
  res.status(200).json({
    status: "sucess",
    message: "working on this route",
  });
});

module.exports = router;
