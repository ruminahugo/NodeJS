const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  schedule_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
  seat_number: { type: String, required: true },
  isBooked: { type: Boolean, required: true },
});

module.exports = mongoose.model('Schedule', seatSchema);
