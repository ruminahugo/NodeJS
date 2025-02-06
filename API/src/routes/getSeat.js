const express = require('express');
const Seat = require('../models/Seat');
const router = express.Router();

router.get('/', async (req, res) => {
    const scheduleId = req.query.scheduleId;
    const dateBooked = req.query.dateBooked;
  
    try {
      const seats = await Seat.find({
        schedule_id: scheduleId,
        date_booked: dateBooked
      }).populate('schedule_id');//join với bảng schedule
  
      if (!seats) {
        return res.status(404).json({ message: 'Không tìm thấy tuyến phù hợp!' });
      }

      res.json(seats);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi server' });
    }
  });
  
  module.exports = router;