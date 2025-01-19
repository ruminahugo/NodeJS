const express = require("express");
const router = express.Router();
const Vocabulary = require("../models/Vocabulary");

// Thêm từ vựng
router.post("/", async (req, res) => {
  try {
    const { word, definition, example, pronunciation } = req.body;
    const newWord = new Vocabulary({ word, definition, example, pronunciation });
    await newWord.save();
    res.status(201).json({ message: "Từ vựng đã được thêm!", vocabulary: newWord });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Lấy danh sách từ vựng
router.get("/", async (req, res) => {
  try {
    const vocabularies = await Vocabulary.find();
    res.status(200).json(vocabularies);
  } catch (err) {
    res.status(500).json({ error: "Không thể lấy danh sách từ vựng." });
  }
});

// Cập nhật từ vựng
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { word, definition, example, pronunciation } = req.body;
    const updatedWord = await Vocabulary.findByIdAndUpdate(
      id,
      { word, definition, example, pronunciation },
      { new: true }
    );
    if (!updatedWord) throw new Error("Không tìm thấy từ vựng.");
    res.status(200).json({ message: "Cập nhật thành công!", vocabulary: updatedWord });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Xóa từ vựng
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWord = await Vocabulary.findByIdAndDelete(id);
    if (!deletedWord) throw new Error("Không tìm thấy từ vựng.");
    res.status(200).json({ message: "Đã xóa từ vựng!", vocabulary: deletedWord });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
