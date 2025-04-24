const Medicine = require('../models/Medicine');
const cloudinary = require('../config/cloudinary');

// Get all medicines
exports.getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new medicine (Admin only)
exports.createMedicine = async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    const medicine = new Medicine({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      prescriptionRequired: req.body.prescriptionRequired,
      stock: req.body.stock,
      category: req.body.category,
      image: {
        public_id: result.public_id,
        url: result.secure_url
      }
    });

    const newMedicine = await medicine.save();
    res.status(201).json(newMedicine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add to cart
exports.addToCart = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }

    const user = await User.findById(req.user.id);
    const existingItem = user.cart.find(item => item.medicine.toString() === req.params.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cart.push({ medicine: req.params.id, quantity: 1 });
    }

    await user.save();
    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};