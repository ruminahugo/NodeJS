const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
    scheduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule', required: true }, // Khung giờ liên kết
    passengerName: { type: String, required: true }, // Tên hành khách
    seatNumber: { type: Number, required: true }, // Số ghế đã đặt
    bookingTime: { type: Date, default: Date.now }, // Thời gian đặt vé
    price: { type: Number, required: true }, // Giá vé
  });
  
  module.exports = mongoose.model('Ticket', ticketSchema);
  