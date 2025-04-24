const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');
const auth = require('../middleware/auth');
const upload = require('../config/multer');

router.get('/', medicineController.getAllMedicines);
router.post('/', auth, upload.single('image'), medicineController.createMedicine);
router.post('/:id/cart', auth, medicineController.addToCart);

module.exports = router;