const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  license_plate: { type: String, required: true },
});

module.exports = mongoose.model('Bus', busSchema);
