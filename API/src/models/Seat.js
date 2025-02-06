const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  schedule_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
  seat_number: { type: String, required: true },
  status: { type: String, required: true },
  date_booked: { type: String, required: false},
});

module.exports = mongoose.model('Seat', seatSchema);
