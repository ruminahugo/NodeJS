const Slider = require('../models/Slider');
const getSlider = async (req, res) => {
    try {
        const sliders = await Slider.find();
        res.json(sliders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving sliders' });
    }
};

const setSlider = async (req, res) => {
    try {
        const { imageUrl, title, description } = req.body;
        const newSlider = new Slider({ imageUrl, title, description });
        await newSlider.save();
        res.status(201).json(newSlider);
    } catch (error) {
        res.status(400).json({ message: 'Error creating slider' });
    }
};

const delSliders = async (req, res) => {
    try {
        const { id } = req.params;
        await Slider.findByIdAndDelete(id);
        res.json({ message: 'Slider deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting slider' });
    }
};

module.exports = {getSlider, setSlider, delSliders};