const express = require('express');
const Route = require('../models/Routes');
const router = express.Router();

router.get('/', async (req, res) => {
    const { departure, destination } = req.query;
  
    try {
      const routes = await Route.find({
        departure,
        destination,
        status: true,
      });
  
      if (!routes.length) {
        return res.status(404).json({ message: 'Không tìm thấy tuyến phù hợp!' });
      }
  
      res.json(routes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi server' });
    }
  });
  
  module.exports = router;