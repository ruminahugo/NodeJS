const express = require('express');
const router = express.Router();
const {
    getSlider,
    setSlider,
    editSlider,
    delSliders
} = require('../controllers/slidersController');

router.get('/', getSlider);
router.post('/', setSlider);
router.delete('/:id', delSliders);
router.put('/:id', editSlider);

module.exports = router;
