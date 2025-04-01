const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
//const { connectRabbitMQ } = require('./config/rabbitmq');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();
const app = express();
connectDB();
///connectRabbitMQ();

app.use(cors({
    origin: '*',  // Allow only this origin
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());
app.use('/', orderRoutes);
//app.get('/', (req, res) => res.send('Order Service Running'));

module.exports = app;
