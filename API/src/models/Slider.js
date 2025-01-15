const mongoose = require('mongoose');
const sliderSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const Slider = mongoose.model('Slider', sliderSchema);
module.exports = Slider;