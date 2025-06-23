const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongo:27017/productService', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Product Service: MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
