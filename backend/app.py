from dotenv import load_dotenv
from flask_mail import Mail
from itsdangerous import URLSafeTimedSerializer
load_dotenv() 

import os
import secrets
import logging
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from extensions import db
from admin import setup_admin

# Importar la configuración
from config import Config
from services.user.user_service import user_blueprint
from services.travel.travel_service import travel_blueprint
from services.vehicles.vehicle_service import vehicle_blueprint
from services.apigoogle.apigoogle_service import apigoogle_blueprint
from services.messaging.messaging_service import chat_blueprint
from services.events.events_service import evento_blueprint
from services.notifications.notifications_utils import notifications_blueprint
from services.user import user_service

import firebase_admin
from firebase_admin import credentials



def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'tu_clave_secreta'
    app.config['MAIL_DEFAULT_SENDER'] = 'noreply@prideride.com'
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USERNAME'] = 'gestion.prideride@gmail.com'
    app.config['MAIL_PASSWORD'] = 'wzpl kaqw gtgd tnbr'
    app.config['MAIL_USE_TLS'] = True
    mail = Mail(app)





    app.config.from_object(Config)
    JWTManager(app)

    cred = credentials.Certificate("prideride_firebase.json")
    firebase_admin.initialize_app(cred)
    
    CORS(app, resources={r"/*": {
        "origins": [
            "http://localhost:4200",
            "http://127.0.0.1:4200",  
            "http://localhost:8100",  
            "http://127.0.0.1:8100",  
            "https://pride-ride.vercel.app",
            "capacitor://localhost",
            "ionic://localhost"
        ],
        "methods": ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization", "X-Requested-With"],
        "supports_credentials": True
    }})

    db.init_app(app)
    
    migrate = Migrate(app, db)
    
    setup_admin(app)

    handler = logging.StreamHandler()
    handler.setLevel(logging.DEBUG)
    formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    handler.setFormatter(formatter)

   
    app.logger.addHandler(handler)
    app.logger.setLevel(logging.DEBUG)
    
    # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
    #       IMPORTACIONES DE LOS DIFERENTES SERVICIOS DE LA API  
    #
    # --> user_blueprint: Servicio relacionado con los usuarios
    # --> travel_blueprint: Servicio relacionado con los viajes
    # --> vehicle_blueprint: Servicio relacionado con los vehículos
    # --> apigoogle_blueprint: Servicio relacionado con los servicios de Google API
    # --> evento_blueprint: Servicio relacionado con los eventos
    # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
    app.register_blueprint(user_blueprint, url_prefix="/api/user")
    app.register_blueprint(travel_blueprint, url_prefix="/api/travel")
    app.register_blueprint(vehicle_blueprint, url_prefix="/api/vehicle")
    app.register_blueprint(apigoogle_blueprint, url_prefix="/api/apigoogle")
    app.register_blueprint(chat_blueprint, url_prefix="/api/chat")
    app.register_blueprint(evento_blueprint, url_prefix="/api/evento")
    app.register_blueprint(notifications_blueprint, url_prefix="/api/notifications")

 
    user_service.mail = mail
    user_service.serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])

    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
