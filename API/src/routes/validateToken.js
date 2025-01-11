const express = require('express');
const router = express.Router();
const {
  validateToken
} = require('../controllers/validateTokenController');

// Routes
router.post('/', validateToken);

module.exports = router;
