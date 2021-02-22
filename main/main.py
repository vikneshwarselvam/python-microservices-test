from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import UniqueConstraint
import json
from dataclasses import dataclass
import requests
from producer import publish
from os import abort

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://admin:admin123@db/main'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
CORS(app)

db = SQLAlchemy(app)

@dataclass
class Product(db.Model):
    id: int
    title: str
    image: str
    likes: int

    id = db.Column(db.Integer, primary_key=True, autoincrement=False)
    title = db.Column(db.String(200))
    image = db.Column(db.String(200))
    likes = db.Column(db.Integer, autoincrement=False)

@dataclass
class ProductUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    product_id = db.Column(db.Integer)
    UniqueConstraint('user_id', 'product_id', name='user_product_unique')


@app.route('/api/products')
def index():
    return jsonify(Product.query.all())

@app.route('/api/products/<int:id>/like', methods=['POST'])
def like(id):
    req = requests.get('http://172.17.0.1:8000/api/users')
    json = req.json()

    try:
        product = Product.query.get(id)
        product.likes = product.likes + 1
        productUser = ProductUser(user_id = json['id'], product_id = id)
        db.session.add(productUser)
        db.session.commit()

        publish('product_liked', id)
    except:
        abort(400, 'You already liked this product')
    return jsonify({
        'message':'Success'
    })
    #return req

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
