const dotenv = require("dotenv");
const connectRabbitMQ = require("./config/rabbitmq");
const orderCreatedConsumer = require("./consumers/orderConsumer");

dotenv.config();

const startApp = async () => {
  const channel = await connectRabbitMQ();
  orderCreatedConsumer(channel);
};

module.exports = startApp;
