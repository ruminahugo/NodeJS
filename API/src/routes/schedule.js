const express = require('express');
const Schedule = require('../models/Schedule');
const router = express.Router();

router.get('/', async (req, res) => {
  const { routeId } = req.params;

  try {
    const schedules = await Schedule.find({ route_id: routeId });

    if (!schedules.length) {
      return res.status(404).json({ message: 'Không có chuyến nào trong tuyến này!' });
    }

    res.json(schedules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi server' });
  }
});

module.exports = router;

