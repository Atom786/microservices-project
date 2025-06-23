const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongo:27017/userService', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("User Service: MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
