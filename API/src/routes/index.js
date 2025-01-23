const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const userLogin = require('./login');
const validateToken = require('./validateToken');
const userregister = require('./register');
const sliders = require('./sliders');
const schedule = require('./schedule');
const ticket = require('./ticket');
const route = require('./route');
const schedule = require('./schedule');

// Routes
router.use('/users', userRoutes);
router.use('/login', userLogin);
router.use('/verify-token', validateToken);
router.use('/register', userregister);
router.use('/sliders', sliders);
router.use('/schedule/:id', schedule);
router.use('/schedule/:id/book', ticket);
router.use('/routes', route);
router.use('/routes/:routeId/schedules', schedule);

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

router.get("/locations", (req, res) => {
  const locations = [
    { id: 1, name: "TP. Hồ Chí Minh" },
    { id: 2, name: "Kiên Giang" },
    { id: 3, name: "Tây Ninh" },
    { id: 4, name: "Bình Thuận" },
  ];
  res.json(locations);
});


module.exports = router;
