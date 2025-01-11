const express = require('express');
const router = express.Router();
const {
  Login
} = require('../controllers/loginController');

// Routes
router.post('/', Login);

module.exports = router;
