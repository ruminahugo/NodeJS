// models/Vocabulary.js
const mongoose = require("mongoose");

const VocabularySchema = new mongoose.Schema({
  word: { type: String, required: true, unique: true },
  definition: { type: String, required: true },
  example: { type: String },
  pronunciation: { type: String }, // Link đến file âm thanh phát âm
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vocabulary", VocabularySchema);
