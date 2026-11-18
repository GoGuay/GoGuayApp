import os

from flask import Blueprint, current_app
import requests
from datetime import datetime, timezone, timedelta
from models.enums import MotivosCancelacionPasajero, MotivosCancelacionConductor, EstadoSolicitudEnum
from services.cancelaciones import calcular_y_registrar_cancelacion, calcular_peso_cancelacion
from models import Viaje, PasajeroViaje, Notificacion, Vehiculo, Puntuacion, TokenPush, HistorialCambiosViaje, Cancelacion, Usuario, Ordenes_Paypal
from extensions import db
from sqlalchemy.orm import joinedload 
from firebase_admin import messaging
from services.notifications.notifications_utils import enviar_notificacion_push
from flask_jwt_extended import jwt_required, get_jwt_identity

import json
PAYPAL_CLIENT_ID = os.getenv('PAYPAL_CLIENT_ID')
PAYPAL_SECRET = os.getenv('PAYPAL_SECRET')
PAYPAL_API = os.getenv('PAYPAL_API')

travel_blueprint = Blueprint('gestionpagos', __name__)

#Obtener el access_token de paypal
def get_access_token():
    try:
        response=requests.post(
            f"{PAYPAL_API}/v1/oauth2/token",
            auth=(PAYPAL_CLIENT_ID, PAYPAL_SECRET),
            data={'grant_type': 'client_credentials'},
            headers={'Accept': 'application/json', 'Accept-Language': 'en_US'}
        )
        if response.status_code != 200:
            print("Error al obtener el token de Paypal:", response.json())
            return None
        
        data=response.json()
        return data.get('access_token')
    
    except Exception as e:
        print ("Excepción al conectar con Paypal para el token:", str(e))
        return None


def reembolsar_pago_al_pasajero(pasajero_viaje, importe:float, motivo: str ="Cancelación de viaje"):
    """Función para devolver a un usuario los importes por la cancelación de un viaje por parte de un conductor"""
    paypal_id=pasajero_viaje.paypal_auth_id
    if not paypal_id:
        return {"exito": False, "error": "No existe identificador de transacción para esta reserva."}
    
    token = get_access_token()
    base_url = current_app.config.get("PAYPAL_API_BASE", "https://api-m.sandbox.paypal.com")
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }

    #Dinero en Authorize
    void_url = f"{base_url}/v2/payments/authorizations/{paypal_id}/void"
    resp_void = requests.post(void_url, headers=headers)
    if resp_void.status_code in (200, 204):
        return {"exito": True, "tipo": "void", "referencia": paypal_id}
    #Dinero en Capture
    refund_url = f"{base_url}/v2/payments/captures/{paypal_id}/refund"
    payload = {
        "amount": {
            "value": f"{importe:.2f}",
            "currency_code": "EUR"
        },
        "note_to_payer": motivo[:255]
    }
    resp_refund = requests.post(refund_url, json=payload, headers=headers)
    if resp_refund.status_code in (200, 201):
        data = resp_refund.json()
        return {"exito": True, "tipo": "refund", "referencia": data.get("id")}
    return {
        "exito": False,
        "error": resp_refund.json() if resp_refund.content else "Error al procesar el reembolso en PayPal"
    }



