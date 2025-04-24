const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicines: [{
    medicine: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' },
    quantity: { type: Number, required: true }
  }],
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Order', OrderSchema);