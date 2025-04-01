const amqp = require('amqplib');

let channel;

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    channel = await connection.createChannel();
    console.log('Order Service: Connected to RabbitMQ');
  } catch (error) {
    console.error('RabbitMQ Connection Error', error);
  }
};

const publishToQueue = async (queue, data) => {
  if (!channel) return;
  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
};

module.exports = { connectRabbitMQ, publishToQueue };
