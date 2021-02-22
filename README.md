# Python-microservices-test
It is a python application developed using flask, django, react and rabbitMQ
# Clone the Repository
```
git clone https://github.com/vikneshwarselvam/python-microservices-test.git
```
# Installing docker and docker-compose
[Docker-install](https://docs.docker.com/engine/install/)

[Docker-compose-install](https://docs.docker.com/compose/install/)
# Installation
1. Visit [CloudAMQP](https://www.cloudamqp.com/) 
2. Create a free account and create a instance
3. Copy the AMQP URL from the instance and paste it inside consumer.py in `admin/consumer.py` and `main/consumer.py`
4. Also paste the url in producer.py inside `admin/products/producer.py` and `main/producer.py`
```
params = pika.URLParameters('YOUR_AMQP_URL')
```
5. After that open terminal and execute the following commands
```
cd python-microservices-test
```
```
sudo chmod +x run-docker.sh
```
```
sudo ./run-docker.sh
```
6. After that visit `http://localhost:3001` in your browser(Main page)
7. Visit `http://localhost:3001/admin/products` in your browser(Admin page)
