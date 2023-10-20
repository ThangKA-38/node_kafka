const { Kafka } = require('kafkajs');
const dotenv = require('dotenv');
dotenv.config();

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [process.env.KAFKA_BROKER],
});

module.exports = kafka;