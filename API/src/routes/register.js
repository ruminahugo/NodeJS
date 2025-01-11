const express = require('express');
const router = express.Router();
const {
    Register
} = require('../controllers/registerController');

// Routes
router.post('/', Register);

module.exports = router;
