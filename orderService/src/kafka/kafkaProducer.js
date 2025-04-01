const { Kafka ,Partitioners} = require("kafkajs");

const kafkaInstance = new Kafka({
    clientId:'Notification',
    brokers:['localhost:9092']
});

const Producer = kafkaInstance.producer({
    createPartitioner: Partitioners.LegacyPartitioner
});

Producer.connect();

const sendNotification = async (topic, message) =>{
    await Producer.send({
        topic:topic,
        messages:[{value:message}]
    });
    console.log(`Message Send to Kafka: ${message}`);
    await Producer.disconnect();
}

module.exports.sendNotification = sendNotification;