import pika, json

params = pika.URLParameters('amqps://khfjueiz:kLx-7wFYMv_34KphJGDqC00eV1fjh_AW@hornet.rmq.cloudamqp.com/khfjueiz')

connection = pika.BlockingConnection(params)

channel = connection.channel()

def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='main', body=json.dumps(body), properties=properties)
