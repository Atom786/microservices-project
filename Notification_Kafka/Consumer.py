# from confluent_kafka import Consumer, KafkaError

# # Kafka Consumer Configuration
# consumer_config = {
#     'bootstrap.servers': '127.0.0.1:9092',  # Your Kafka broker(s)
#     'group.id': 'my_consumer_group',        # Consumer Group
#     'auto.offset.reset': 'latest'           # Consume only new messages
# }

# # Initialize the Consumer
# consumer = Consumer(consumer_config)
# consumer.subscribe(['test-topic'])  # Subscribe to the topic

# try:
#     while True:
#         msg = consumer.poll(timeout=None)  # Blocking call, waits for messages

#         if msg is None:
#             continue  # Should never happen with timeout=None

#         if msg.error():
#             if msg.error().code() == KafkaError._PARTITION_EOF:
#                 continue  # End of partition, ignore
#             else:
#                 print(f"Error: {msg.error()}")
#                 continue

#         # Process the message when received
#         print(f"Received message: {msg.value().decode('utf-8')}")

# except KeyboardInterrupt:
#     print("Consumer shutting down.")
# finally:
#     consumer.close()


from kafka import KafkaConsumer

consumer = KafkaConsumer('test-topic', bootstrap_servers='localhost:9092')

print("Listening for messages...")

for message in consumer:
    print(f"Received message: {message.value.decode('utf-8')}")



