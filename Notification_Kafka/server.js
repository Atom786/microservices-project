const express = require("express");
const bodyParser = require("body-parser");
const { Kafka } = require("kafkajs");

const app = express();
app.use(bodyParser.json());

const kafka = new Kafka({
    clientId: "ecommerce-app",
    brokers: ["localhost:9092"], // Kafka broker
});

const producer = kafka.producer();

app.post("/api/orders", async (req, res) => {
    try {
        const orderData = req.body;

        // Produce message to Kafka
        await producer.connect();
        await producer.send({
            topic: "order_created",
            messages: [{ value: JSON.stringify(orderData) }],
        });
        await producer.disconnect();

        res.status(201).json({ message: "Order placed successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Order processing failed." });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
