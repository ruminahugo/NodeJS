const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const userLogin = require('./login');
const validateToken = require('./validateToken');
const userregister = require('./register');
const sliders = require('./sliders');
const route = require('./route');
const get_route = require('./getRoute');
const get_seat = require('./getSeat');
const get_seat_layout = require('./getSeatLayout');

// Routes
router.use('/users', userRoutes);
router.use('/login', userLogin);
router.use('/verify-token', validateToken);
router.use('/register', userregister);
router.use('/sliders', sliders);
router.use('/routes', route);
router.use('/getRoute', get_route);
router.use('/getSeat', get_seat);
router.use('/getSeatLayout', get_seat_layout);

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
