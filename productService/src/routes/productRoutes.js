const express = require('express');
const router = express.Router();
const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const protect = require('../middlewares/authMiddleware');

// Product routes
router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;
