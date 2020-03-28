var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

// Define your schema as normal.
var gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String,  required: true },
  wagerEnabled: { type: Boolean, required: true }
});

module.exports = mongoose.model("Game", gameSchema);
