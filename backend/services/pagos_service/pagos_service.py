# # # # # # # # # # # # # # # # # # # # # # # # # # # # 
#  SERVICIO DEDICADO PARA LOS PAGOS DE LA APLICACIÓN  #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # 

from datetime import datetime, timezone, timedelta
import random
import re
from io import BytesIO
import os


from flask import Blueprint, jsonify, render_template,  request, current_app
from itsdangerous import SignatureExpired, BadSignature
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity
from sqlalchemy.orm import joinedload 
import requests
from PIL import Image
from cloudinary import uploader
from flask_mail import Message
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from twilio.rest import Client

# Importaciones de Modelos y Enums
from extensions import db
from models.tokensusados import TokenUsado
from models import (Usuario, RolUsuarioEnum, Viaje, Ordenes_Paypal, PasajeroViaje, Monedero, MovimientoMonedero, MovimientosMonederoEnum, EstadoViajeEnum)


pagos_blueprint = Blueprint('pagos', __name__)


PAYPAL_CLIENT_ID = os.getenv('PAYPAL_CLIENT_ID')
PAYPAL_SECRET = os.getenv('PAYPAL_SECRET')
PAYPAL_API = os.getenv('PAYPAL_API')


# Obtener el access_token de paypal
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


# Recibe los datos del viaje con el precio de este. 
@pagos_blueprint.route("/create-order", methods=['POST'])
def create_order():
    """
    1. Obtenemos los datos en el json desde el front y sacamos el viaje_id. Si no lo hay, se devuelve error y sale.
    2. Accede a la bd (tabla Viaje) y mediante el id se obtiene el viaje en concreto, el usuario que lo ha creado y todos los datos del viaje.
    3. Si no se encuentra el viaje, devuelve un error y sale. 
    4. Obtenemos el email de paypal que tenga el conductor del viaje y lo guardamos en email_conductor, si no lo tuviese el dinero pasa temporalmente al email de la empresa. 
    5. Se guarda en precio_formateado el precio del viaje con dos decimales. 
    6. Se obtiene el token del acceso  paypal, se guarda en token
    7. headers --> configuración necesaria para la petición a paypal. 
    8. payload - Petición que vamos a hacer a paypal. 
    """
    data = request.get_json()
    viaje_id = data.get('viaje_id')

    if not viaje_id:
        return jsonify({"error": "Falta el id del viaje"}), 400
    
    viaje = db.session.query(Viaje).options(
        joinedload(Viaje.usuario)
    ).filter(Viaje.id == viaje_id).first()
    
    if not viaje:
        return jsonify({"error": "Viaje no encontrado"}), 404
        
    email_empresa = "goguay_empresa@business.example.com"
    
    precio_formateado = f"{viaje.precio_viaje:.2f}"
    
    token = get_access_token()
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    
    payload = {
        "intent": "AUTHORIZE",
        "purchase_units": [{
            "reference_id": str(viaje_id),
            "amount": {
                "currency_code": "EUR", 
                "value": precio_formateado
            },
            
            "description": f"Reserva de plaza en GoGuay - Destino {viaje.destino}"
        }],
        "application_context": { 
            "shipping_preference": "NO_SHIPPING", 
            "user_action": "PAY_NOW",
            "return_url": "http://localhost:4200/payment-success",
            "cancel_url": "http://localhost:4200/payment-cancel"
        }
    }

    response = requests.post(f"{PAYPAL_API}/v2/checkout/orders", json=payload, headers=headers)
    order = response.json()

    if response.status_code not in [200, 201]:
        print("DETALLE DE ERROR EN PAYPAL API:", order)
        return jsonify({"error": "Error al comunicarse con la pasarela", "detalle": order}), response.status_code

    try:
        approve_link = next(
            link["href"] for link in order["links"] if link["rel"] == "approve"
        )
        return jsonify({
            "order_id": order["id"],
            "approve_url": approve_link
        }), 200
    except KeyError:
        return jsonify({"error": "No se pudo generar el enlace de aprobación", "detalle": order}), 500

#
# Captura el pago de la orden creada en PayPal
# 
@pagos_blueprint.route("/capture-order/<order_id>", methods=['POST'])
def capture_order(order_id: str):
    datos_front = request.get_json(silent=True) or {}
    guardar_metodo = datos_front.get('guardar_metodo', True)

    token = get_access_token()
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    response = requests.post(f"{PAYPAL_API}/v2/checkout/orders/{order_id}/authorize", headers=headers)
    
    capture_data = response.json()
    
    if response.status_code not in [200, 201]:
        print(f"❌ Error al capturar la orden {order_id}:", capture_data)
        return jsonify(capture_data), response.status_code
    
    try:
        authorization_id = capture_data['purchase_units'][0]['payments']['authorizations'][0]['id']
        payer_info = capture_data.get('payer', {})
        payer_id = payer_info.get('payer_id')
        payer_email = payer_info.get('email_address')
        orden_paypal = Ordenes_Paypal.query.filter_by(paypal_order_id=order_id).first()
        
        if orden_paypal:
            pasajero_viaje = PasajeroViaje.query.filter_by(
                viaje_id=orden_paypal.viaje_id, 
                usuario_id=orden_paypal.pasajero_id
            ).first()
            
            if pasajero_viaje:
                pasajero_viaje.paypal_auth_id = authorization_id
                db.session.commit()
                print(f"✅ Authorization ID {authorization_id} guardado en PasajeroViaje.")

            if payer_id and guardar_metodo:
                usuario = Usuario.query.get(orden_paypal.pasajero_id)
                if usuario:
                    usuario.paypal_payer_id = payer_id
                    usuario.paypal_vinculado = True
                    usuario.paypal_fecha_vinculacion = datetime.now(timezone.utc)
                    if payer_email and hasattr(usuario, 'paypal_email'):
                        usuario.paypal_email = payer_email
                    print(f"✅ PayPal Payer ID {payer_id} guardado en Usuario {usuario.id}.")

            db.session.commit()

    except (KeyError, IndexError) as e:
        print("❌ Error extrayendo el authorization_id:", e)
        return jsonify({"error": "No se pudo extraer el ID de autorización", "detalle": capture_data}), 500

    return jsonify(capture_data), 200


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
    print(f"🔍 Respuesta orden PayPal status: {resp_order.status_code}") # <-- Añade esto
    if resp_order.status_code == 200:
        order_data = resp_order.json()
        payments = order_data.get("purchase_units", [{}])[0].get("payments", {})
        authorizations = payments.get("authorizations", [])
        captures = payments.get("captures", [])

        print(f"🔍 Autorizaciones encontradas: {authorizations}") # <-- Añade esto
        print(f"🔍 Capturas encontradas: {captures}")

        if authorizations:
            auth_id = authorizations[0].get("id")
        if captures:
            capture_id = captures[0].get("id")
    print(f"🚀 Intentando hacer VOID con ID: {auth_id}")

    void_url = f"{base_url}/v2/payments/authorizations/{auth_id}/void"
    resp_void = requests.post(void_url, headers=headers)
    print(f"🔍 Respuesta VOID status: {resp_void.status_code} - Body: {resp_void.text}") # <-- Añade esto
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

    