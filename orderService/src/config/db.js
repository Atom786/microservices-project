const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/orderService');
    console.log("Order Service: MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
