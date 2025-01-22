const express = require('express');
const Schedule = require('../models/Schedule');
const router = express.Router();

// Lấy sơ đồ ghế theo ScheduleID
router.get('/seats', async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) return res.status(404).send('Schedule not found');
    res.json(schedule.seats);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// Hủy vé
router.post('/cancel', async (req, res) => {
  const { seatNumber } = req.body;

  try {
    // Tìm khung giờ
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) return res.status(404).send('Schedule not found');

    const seat = schedule.seats.find(s => s.seatNumber === seatNumber);
    if (!seat) return res.status(404).send('Seat not found');
    if (!seat.isBooked) return res.status(400).send('Seat is not booked');

    // Cập nhật trạng thái ghế
    seat.isBooked = false;
    await schedule.save();

    // Xóa vé
    await Ticket.deleteOne({ scheduleId: req.params.id, seatNumber });

    res.send({ message: 'Cancellation successful' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});


module.exports = router;
