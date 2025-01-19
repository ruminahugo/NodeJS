const Course = require('../models/Course');
const getCourse = async (req, res) => {
    try {
        const sliders = await Course.find();
        res.json(sliders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving sliders' });
    }
};

const setCourse = async (req, res) => {
    try {
        const { imageUrl, title, description } = req.body;
        const newSlider = new Slider({ imageUrl, title, description });
        await newSlider.save();
        res.status(201).json(newSlider);
    } catch (error) {
        res.status(400).json({ message: 'Error creating slider' });
    }
};

const delCourse = async (req, res) => {
    try {
        const { id } = req.params;
        await Slider.findByIdAndDelete(id);
        res.json({ message: 'Slider deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting slider' });
    }
};

module.exports = {getSlider, setSlider, delSliders};