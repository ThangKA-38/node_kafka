const { Kafka } = require('kafkajs');
const kafka = require('../kafka-config');
const consumer = kafka.consumer({ groupId: 'my-group' });

const runConsumer = async() => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'my-topic', fromBeginning: true });

    await consumer.run({
        eachMessage: async({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            });
        },
    });
};

runConsumer().catch(console.error);