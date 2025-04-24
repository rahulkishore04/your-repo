const Doctor = require('../models/Doctor');

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.status(200).json({ success: true, data: doctors });
};