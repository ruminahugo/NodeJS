const express = require('express');
const router = express.Router();
const {
    getSlider,
    setSlider,
    delSliders
} = require('../controllers/slidersController');

router.get('/', getSlider);
router.post('/', setSlider);
router.delete('/:id', delSliders);

module.exports = router;
