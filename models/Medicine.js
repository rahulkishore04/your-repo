const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  prescriptionRequired: { type: Boolean, default: false },
  stock: { type: Number, required: true },
  category: { 
    type: String, 
    enum: ['general', 'cardio', 'neuro', 'ortho', 'pediatric', 'dermatology', 'gastro'],
    required: true
  },
  image: {
    public_id: String,
    url: String
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Medicine', medicineSchema);