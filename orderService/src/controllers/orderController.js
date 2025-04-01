const Order = require('../models/orderModel');
//const { publishToQueue } = require('../config/rabbitmq');
const {sendNotification} = require('../kafka/kafkaProducer');

const createOrder = async (req, res) => {
  if (req.body && req.body.cart && req.body.cart.length > 0) {
    let totalAmount = 0;
    const products = req.body.cart.map((item) => {
      totalAmount = totalAmount + item.price;
      return ({ productId: item._id, quantity: 1 })
    });

    const order = await Order.create({
      userId: req.user.userId,
      products,
      totalAmount
    });
    const message = JSON.stringify(products);

    sendNotification('test-topic',message);
   
    // Publish order-created event
  //  await publishToQueue('ORDER_CREATED', order);

    res.status(201).json(order);
  }
};

const getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.userId });
  res.json(orders);
};

module.exports = { createOrder, getOrders };
