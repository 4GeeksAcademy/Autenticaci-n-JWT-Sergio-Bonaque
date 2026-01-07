from flask import Blueprint, request, jsonify
from src.models import User
from src import db, jwt
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)


@api.route('/Registro', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"msg": "Email y contraseña son obligatorios"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "El email ya existe"}), 400

    user = User(email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "Usuario ya creado"}), 201


@api.route('Inicio', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        token = create_access_token(identity=user.id)
        return jsonify({"token": token}), 200

    return jsonify({"msg": "Error ene los datos"}), 401
