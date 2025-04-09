const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE_URL.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Connected to MongoDB");
  console.log("Database connection successful");
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
