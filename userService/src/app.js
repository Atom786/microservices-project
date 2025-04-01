const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); 

dotenv.config();
const app = express();
connectDB();

app.use(cors({
    origin: '*',  // Allow only this origin
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());
app.use('/', userRoutes);

// app.get('/', (req, res) => res.send('User Service Running'));

module.exports = app;
