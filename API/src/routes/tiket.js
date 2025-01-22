const Ticket = require('../models/Ticket');

// Đặt vé
router.post('/', async (req, res) => {
  const { passengerName, seatNumber, price } = req.body;

  try {
    // Tìm khung giờ và ghế
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) return res.status(404).send('Schedule not found');

    const seat = schedule.seats.find(s => s.seatNumber === seatNumber);
    if (!seat) return res.status(404).send('Seat not found');
    if (seat.isBooked) return res.status(400).send('Seat already booked');

    // Cập nhật trạng thái ghế
    seat.isBooked = true;
    await schedule.save();

    // Thêm vé vào bảng Ticket
    const ticket = new Ticket({
      scheduleId: req.params.id,
      passengerName,
      seatNumber,
      price,
    });
    await ticket.save();

    res.send({ message: 'Booking successful', ticket });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
