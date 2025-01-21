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
        const { id, imageUrl, title, description } = req.body;

        // Kiểm tra nếu thiếu `id`
        if (!id) {
            return res.status(400).json({ message: 'Slider ID is required' });
        }

        // Tìm và cập nhật slider
        const updatedSlider = await Slider.findByIdAndUpdate(
            id,
            { imageUrl, title, description },
            { new: true } // Trả về tài liệu sau khi cập nhật
        );

        // Kiểm tra nếu không tìm thấy slider
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
        await Slider.findByIdAndDelete(id);
        res.json({ message: 'Slider deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting slider' });
    }
};

module.exports = {getSlider, setSlider, editSlider, delSliders};