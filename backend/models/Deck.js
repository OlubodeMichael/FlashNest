const mongoose = require("mongoose");

/*
{
  _id: ObjectId,
  userId: ObjectId,      // Ref to the User who owns it
  title: String,
  description: String,   // Optional
  createdAt: Date
}

*/
const deckSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: [true, "A deck must have a title"],
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Deck", deckSchema);
