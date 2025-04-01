const Product = require('../models/productModel');

// Add Product
const addProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const product = await Product.create({ name, description, price, stock });
  res.status(201).json(product);
};

// Get All Products
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Get Product by ID
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

// Update Product
const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete Product
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};

module.exports = { addProduct, getProducts, getProductById, updateProduct, deleteProduct };
