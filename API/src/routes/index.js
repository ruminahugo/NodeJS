const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const userLogin = require('./login');
const validateToken = require('./validateToken');
const userregister = require('./register');
const sliders = require('./sliders');
const vocabularyRoutes = require('./vocabulary');

// Routes
router.use('/users', userRoutes);
router.use('/login', userLogin);
router.use('/verify-token', validateToken);
router.use('/register', userregister);
router.use('/sliders', sliders);
router.use('/vocabulary', vocabularyRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

module.exports = router;
