const amqp = require('amqplib');

let channel;

const connectRabbitMQ = async () => {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  channel = await connection.createChannel();
  await channel.assertQueue('ORDER_CREATED');
  console.log("Notification Service: Connected to RabbitMQ");
  return channel;
};

module.exports = connectRabbitMQ;
