const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  availability: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 }
});

module.exports = mongoose.model('Doctor', DoctorSchema);