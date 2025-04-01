const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  products: [
    {
      productId: String,
      quantity: Number,
    }
  ],
  totalAmount: Number,
  status: { type: String, default: 'CREATED' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
