from flask import Flask, request, jsonify, Blueprint
from api.models import db, User
from api.utils import APIException  # Importación correcta desde el módulo
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    if not body:
        return jsonify({"msg": "Cuerpo vacío"}), 400
    
    user = User(email=body["email"], password=body["password"], is_active=True)
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "Usuario creado"}), 201

@api.route('/token', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Login fallido"}), 401
    
    token = create_access_token(identity=str(user.id))
    return jsonify({"token": token}), 200
