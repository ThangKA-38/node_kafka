const { Kafka } = require('kafkajs');
const kafka = require('../kafka_config');
const producer = kafka.producer();

const runProducer = async() => {
    await producer.connect();

    const message = {
        key: 'key1',
        value: 'This is a message from app1 to app2',
    };

    await producer.send({
        topic: 'my-topic',
        messages: [message],
    });

    await producer.disconnect();
};

runProducer().catch(console.error);