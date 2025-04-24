const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  medicine: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' },
  quantity: { type: Number, default: 1 }
});

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [cartItemSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);