const express = require("express");
const dotenv = require("dotenv");
const { createProxyMiddleware } = require("http-proxy-middleware"); // ✅ Import this
const userProxy = require("./routes/userProxy");
const productProxy = require("./routes/productProxy");
const orderProxy = require("./routes/orderProxy");
const protect = require("./middlewares/authMiddleware");
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors({
    origin: '*',  // Allow only this origin
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

// Open Routes
app.use("/api/users", userProxy);

// Protected Routes
app.use("/api/products", productProxy);
app.use("/api/orders", orderProxy);

app.get("/", (req, res) => res.send("API Gateway Running"));

module.exports = app;
