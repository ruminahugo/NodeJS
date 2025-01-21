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

const editSlider = async (req, res) => {
    try {
        const { imageUrl, title, description } = req.body;
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Slider ID is required' });
        }

        const updatedSlider = await Slider.findByIdAndUpdate(
            id,
            { imageUrl, title, description },
            { new: true }
        );

        if (!updatedSlider) {
            return res.status(404).json({ message: 'Slider not found' });
        }

        res.status(200).json(updatedSlider);
    } catch (error) {
        console.error('Error updating slider:', error);
        res.status(500).json({ message: 'Error updating slider' });
    }
};

const delSliders = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedSlider = await Slider.findByIdAndDelete(id);
        if (!deletedSlider) {
            return res.status(404).json({ message: 'Slider not found' });
        }

        res.json({ message: 'Slider deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting slider' });
    }
};


module.exports = {getSlider, setSlider, editSlider, delSliders};