const mongoose = require('mongoose');

const routesSchema = new mongoose.Schema({
  departure: { type: String, required: true },
  destination: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: String, required: true },
  status: { type: Boolean, required: true }
});

module.exports = mongoose.model('Route', routesSchema);
