const sendNotification = require("../utils/mailSender");

const orderCreatedConsumer = async (channel) => {
  channel.consume("ORDER_CREATED", async (msg) => {
    const order = JSON.parse(msg.content.toString());
    console.log("Notification Service: Order Received", order._id);

    // Mock notification
    sendNotification(order.userEmail, `Order placed successfully with ID: ${order._id}`);
    channel.ack(msg);
  });
};

module.exports = orderCreatedConsumer;
