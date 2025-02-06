const express = require('express');
const Route = require('../models/Routes');
const router = express.Router();

router.get('/departure', async (req, res) => {  
  try {
    const departure = await Route.find().select('_id departure');

    if (!departure.length) {
      return res.status(404).json({ message: 'Không có dữ liệu!' });
    }

    res.json(departure);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi server' });
  }
});

router.get('/destination', async (req, res) => {  
    try {
      const destination = await Route.find().select('_id destination');
  
      if (!destination.length) {
        return res.status(404).json({ message: 'Không có dữ liệu!' });
      }
  
      res.json(destination);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi server' });
    }
  });

module.exports = router;

