const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  route_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
  time: { type: String, required: true },
  busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus' }, // Xe liên kết (nếu có)
});

module.exports = mongoose.model('Schedule', scheduleSchema);
