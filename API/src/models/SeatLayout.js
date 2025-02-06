const mongoose = require('mongoose');

const seatLayout = new mongoose.Schema({
  layoutName: { type: Number, required: true },
  seatLayout: { type: String, required: true },
});

module.exports = mongoose.model('seatLayout', seatLayout);
