const express = require('express');
const Schedule = require('../models/Schedule');
const SeatLayout = require('../models/SeatLayout');
const router = express.Router();

router.get('/:scheduleId', async (req, res) => {
    const { scheduleId } = req.params;
  
    try {
      const seatLayouts = await Schedule.findById(scheduleId).populate('seatLayoutId');
      if (!seatLayouts) {
        return res.status(404).json({ message: 'Không tìm thấy chuyến phù hợp!' });
      }
      if (!seatLayouts.seatLayoutId) {
        return res.status(404).json({ message: 'Không tìm thấy sơ đồ phù hợp!' });
      }
      
      const seatLayoutData = seatLayouts.seatLayoutId.seatLayout;
      if (!seatLayoutData) {
        return res.status(404).json({ message: 'Dữ liệu sơ đồ không hợp lệ!' });
      }
      
      res.json(JSON.parse(seatLayoutData));
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi server' });
    }
  });
  
  module.exports = router;