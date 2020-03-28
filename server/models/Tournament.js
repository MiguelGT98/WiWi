var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

// Define your schema as normal.
var tournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startsAt: { type: String, required: true },
  endsAt: { type: String, required: true },
  rulebook: { type: Object, required: false },
  participants: { type: Array, required: false },
  teamBased: { type: Boolean, required: false },
  game: { type: Object, required: true },
  address: { type: String, required: true }
});

module.exports = mongoose.model("tournament", tournamentSchema);
