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


def reembolsar_pago_al_pasajero(pasajero_viaje, importe: float, motivo: str = "Cancelación de viaje"):
    """Libera una autorización (void) o reembolsa un pago capturado (refund) en PayPal."""
    paypal_id = getattr(pasajero_viaje, "paypal_auth_id", None)
    if not paypal_id:
        return {"exito": False, "error": "No existe identificador de transacción para esta reserva."}

    token = get_access_token()
    if not token:
        return {"exito": False, "error": "No se pudo obtener el token de autenticación de PayPal."}

    base_url = PAYPAL_API or current_app.config.get("PAYPAL_API_BASE", "https://api-m.sandbox.paypal.com")
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}"
    }

    auth_id = paypal_id
    capture_id = paypal_id

    resp_order = requests.get(f"{base_url}/v2/checkout/orders/{paypal_id}", headers=headers)
    if resp_order.status_code == 200:
        order_data = resp_order.json()
        payments = order_data.get("purchase_units", [{}])[0].get("payments", {})
        authorizations = payments.get("authorizations", [])
        captures = payments.get("captures", [])

        if authorizations:
            auth_id = authorizations[0].get("id")
        if captures:
            capture_id = captures[0].get("id")

    void_url = f"{base_url}/v2/payments/authorizations/{auth_id}/void"
    resp_void = requests.post(void_url, headers=headers)
    if resp_void.status_code in (200, 204):
        print(f"✅ Autorización PayPal {auth_id} anulada (VOID) correctamente.")
        return {"exito": True, "tipo": "void", "referencia": auth_id, "importe": f"{float(importe):.2f}"}

    refund_url = f"{base_url}/v2/payments/captures/{capture_id}/refund"
    payload = {
        "amount": {
            "value": f"{float(importe):.2f}",
            "currency_code": "EUR"
        },
        "note_to_payer": motivo[:255]
    }
    resp_refund = requests.post(refund_url, json=payload, headers=headers)
    if resp_refund.status_code in (200, 201):
        data = resp_refund.json()
        print(f"✅ Reembolso PayPal {data.get('id')} completado (REFUND).")
        return {"exito": True, "tipo": "refund", "referencia": data.get("id"), "importe": f"{float(importe):.2f}"}

    error_detalle = resp_refund.json() if resp_refund.content else resp_void.text
    print(f"❌ Error PayPal al cancelar/reembolsar (auth={auth_id}, cap={capture_id}): {error_detalle}")
    return {
        "exito": False,
        "error": error_detalle or "Error al procesar el reembolso en PayPal"
    }


