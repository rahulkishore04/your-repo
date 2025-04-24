const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json({ success: true, data: order });
};