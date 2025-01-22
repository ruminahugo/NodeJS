const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  departureTime: { type: Date, required: true }, // Thời gian xuất bến
  route: { type: String, required: true }, // Tuyến đường
  busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus' }, // Xe liên kết (nếu có)
  seats: [
    {
      seatNumber: { type: Number, required: true }, // Số ghế
      isBooked: { type: Boolean, default: false }, // Ghế đã được đặt hay chưa
    },
  ],
});

module.exports = mongoose.model('Schedule', scheduleSchema);
