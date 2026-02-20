from flask import Flask, request, jsonify, Blueprint
from api.models import db, User
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    # Punto 1: Crear usuario
    new_user = User(email=body["email"], password=body["password"], is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "Usuario creado"}), 201

@api.route('/token', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    # Punto 2: Validar usuario en DB
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Error de login"}), 401
    
    # Generar el token
    token = create_access_token(identity=str(user.id))
    return jsonify({"token": token}), 200
