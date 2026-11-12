from datetime import datetime, timezone, timedelta
import os
from flask import Blueprint, jsonify, render_template,  request
from flask_jwt_extended import jwt_required, get_jwt_identity
import requests
from decimal import Decimal

# Importaciones de Modelos y Enums
from extensions import db
from models import (Usuario, Monedero, MovimientoMonedero, MovimientosMonederoEnum)

monedero_blueprint = Blueprint('monedero', __name__)

PAYPAL_CLIENT_ID = os.getenv('PAYPAL_CLIENT_ID')
PAYPAL_SECRET = os.getenv('PAYPAL_SECRET')
PAYPAL_API = os.getenv('PAYPAL_API')

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


## --- RUTAS DE RECARGA DE MONEDERO CON PAYPAL --- ##

@monedero_blueprint.route("/create-wallet-order", methods=['POST'])
@jwt_required()
def create_wallet_order():
    """
    1. Recibe la cantidad que el usuario desea añadir a su monedero desde el frontend.
    2. Valida que el usuario esté autenticado mediante JWT y tenga un monedero activo.
    3. Crea una orden en PayPal configurada para capturar fondos destinados a la cuenta de la empresa.
    """
    current_user_id = get_jwt_identity()
    data = request.get_json() or {}
    
    cantidad = data.get('cantidad')

    if not cantidad or float(cantidad) <= 0:
        return jsonify({"error": "La cantidad de recarga no es válida"}), 400

    usuario = Usuario.query.get(current_user_id)
    if not usuario:
        return jsonify({"error": "Usuario no encontrado"}), 404

    # Formatear el precio a dos decimales requerido por PayPal
    precio_formateado = f"{float(cantidad):.2f}"
    
    token = get_access_token()
    if not token:
        return jsonify({"error": "No se pudo autenticar con la pasarela de pagos"}), 500
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    
    # El dinero de la recarga va directamente a la cuenta business de la empresa
    email_empresa = "goguay_empresa@business.example.com"
    
    payload = {
        "intent": "CAPTURE",
        "purchase_units": [{
            "reference_id": f"wallet_recharge_{current_user_id}",
            "amount": {
                "currency_code": "EUR", 
                "value": precio_formateado
            },
            "payee": {
                "email_address": email_empresa
            },
            "description": f"Recarga de saldo en monedero GoGuay - Usuario {usuario.email}"
        }],
        "application_context": { 
            "shipping_preference": "NO_SHIPPING", 
            "user_action": "PAY_NOW",
            "return_url": "http://localhost:4200/saldo-transferencias?success=true",
            "cancel_url": "http://localhost:4200/saldo-transferencias?cancel=true"
        }
    }

    response = requests.post(f"{PAYPAL_API}/v2/checkout/orders", json=payload, headers=headers)
    order = response.json()

    if response.status_code not in [200, 201]:
        print("❌ DETALLE DE ERROR EN PAYPAL API (Monedero):", order)
        return jsonify({"error": "Error al comunicarse con la pasarela de PayPal", "detalle": order}), response.status_code

    try:
        approve_link = next(
            link["href"] for link in order["links"] if link["rel"] == "approve"
        )
        return jsonify({
            "order_id": order["id"],
            "approve_url": approve_link
        }), 200
    except KeyError:
        return jsonify({"error": "No se pudo generar el enlace de aprobación de PayPal", "detalle": order}), 500


@monedero_blueprint.route("/capture-wallet-order/<order_id>", methods=['POST'])
@jwt_required()
def capture_wallet_order(order_id: str):
    """
    1. Captura la orden de PayPal una vez el usuario aprueba el pago.
    2. Si el pago es exitoso ('COMPLETED'), busca el monedero del usuario autenticado.
    3. Incrementa el saldo actual y registra un nuevo movimiento en el historial.
    4. Guarda los cambios en la base de datos de forma segura.
    """
    current_user_id = get_jwt_identity()
    
    token = get_access_token()
    if not token:
        return jsonify({"error": "No se pudo autenticar con la pasarela de pagos"}), 500
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    response = requests.post(f"{PAYPAL_API}/v2/checkout/orders/{order_id}/capture", headers=headers)
    
    capture_data = response.json()
    
    if response.status_code not in [200, 201] or capture_data.get("status") != "COMPLETED":
        print(f"Error al capturar la orden de recarga {order_id}:", capture_data)
        return jsonify({"error": "El pago no pudo ser completado o capturado", "detalle": capture_data}), 400
        
    try:
        unidad_compra = capture_data["purchase_units"][0]
        captura = unidad_compra["payments"]["captures"][0]
        importe_recargado = float(captura["amount"]["value"])
        
        movimiento = registro_movimientos_monedero(
            usuario_id = current_user_id,
            concepto = MovimientosMonederoEnum.RECARGA_PAYPAL ,
            cantidad=importe_recargado,
            referencia_id = order_id
        )
        return jsonify({
            "mensaje": "Saldo añadido correctamente al monedero",
            "nuevo_saldo": movimiento.saldo_actual,
            "detalles_pago": capture_data
        }), 200
    
    except ValueError as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        db.session.rollback()
        print(f"Error interno al actualizar el monedero: {str(e)}")
        return jsonify({"error": f"Error interno al procesar la recarga: {str(e)}"}), 500

       

@monedero_blueprint.route("/saldo-actual", methods=['GET'])
@jwt_required()
def get_wallet_balance():
    current_user_id = get_jwt_identity()
    
    monedero = Monedero.query.filter_by(usuario_id=current_user_id).first()
    if not monedero:
        return jsonify({"saldo": 0.0}), 200
        
    return jsonify({"saldo": monedero.saldo}), 200

# Registro de movimientos en el monedero
def registro_movimientos_monedero(usuario_id, concepto, cantidad, referencia_id=None):
    """
    Función centralizada: busca el monedero, calcula saldos y registra el movimiento.
    Lanza ValueError si hay algún problema contable.
    """
    monedero = Monedero.query.filter_by(usuario_id=usuario_id).first()
    if not monedero:
        monedero = Monedero(usuario_id=usuario_id, saldo=0.0)
        db.session.add(monedero)
        db.session.flush()
    
    saldo_anterior = monedero.saldo
    saldo_actual = saldo_anterior + cantidad

    if saldo_actual<0:
        raise ValueError("Saldo negativo no es posible")
    
    monedero.saldo = saldo_actual

    nuevo_movimiento = MovimientoMonedero(
        monedero_id=monedero.id,
        concepto=concepto,
        cantidad=cantidad,
        saldo_anterior=saldo_anterior,
        saldo_actual=saldo_actual,
        referencia_id=referencia_id
    )
    db.session.add(nuevo_movimiento)
    db.session.commit()

    return nuevo_movimiento

# Para obtener los movimientos en el monedero de un usuario
@monedero_blueprint.route("/obtener-movimientos-monedero/<int:usuario_id>", methods=['GET'])
def obtener_movimientos_monedero(usuario_id):
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({"error": "Falta el campo 'usuario_id' en la solicitud"}), 400
    monedero = Monedero.query.filter_by(usuario_id=usuario_id).first()
    if not monedero:
        return jsonify({"error": "El usuario no tiene monedero"}), 404
    
    movimientos = MovimientoMonedero.query.filter_by(monedero_id=monedero.id).all()

    if not movimientos:
        return jsonify({"error": "El usuario no tiene movimientos en su monedero"}), 404
    
    return jsonify({
        "movimientos":[movimiento.serializeMovimientoMonedero() for movimiento in movimientos]
    }), 200


@monedero_blueprint.route("/transferencia_desde_monedero/<int:usuario_id>", methods=["POST"])
@jwt_required()
def transferencia_desde_monedero(usuario_id):
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({"error": "Falta el campo 'usuario_id' en la solicitud"}), 400
    monedero = Monedero.query.filter_by(usuario_id=usuario_id).first()
    if not monedero:
        return jsonify({"error": "El usuario no tiene monedero"}), 404
    
    data = request.get_json() or {}
    cantidad_solicitada = data.get('cantidad')
    metodo_transferencia = data.get('metodo')
    cuenta_destino = data.get('cuenta_destino')

    if not metodo_transferencia or not cuenta_destino:
        return jsonify({"error": "Faltan datos obligatorios (método de pago o cuenta destino)"}), 400
    
    saldo_actual = Decimal(str(monedero.saldo))

    if cantidad_solicitada is None or str(cantidad_solicitada).lower() == 'todo':
        cantidad_a_retirar = saldo_actual
    else:
        try:
            cantidad_a_retirar = Decimal(str(cantidad_solicitada))
        except ValueError:
            return jsonify({"error": "La cantidad especificada no es valida"}), 400
    
    if cantidad_a_retirar <= 0:
        return jsonify({"error": "La cantidad a retirar debe ser mayor a 0"}), 400   
    
    if cantidad_a_retirar > saldo_actual:
        return jsonify({"error": "No tienes suficiente saldo en el monedero"}), 400

    if metodo_transferencia == 'banco':
        if not usuario.cobro_iban or usuario.cobro_iban.strip().lower() != cuenta_destino.strip().lower():
            return jsonify({"error": "La cuenta bancaria no coincide con la registrada por el usuario"}), 400
    elif metodo_transferencia == 'paypal':
        if not usuario.cobro_paypal_email or usuario.cobro_paypal_email.strip().lower() != cuenta_destino.strip().lower():
           return jsonify({"error": "La cuenta de PayPal no coincide con la registrada por el usuario"}), 400
        token = get_access_token()
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        payout_payload = {
            "sender_batch_header": {
                "sender_batch_id": f"payout_{usuario_id}_{int(datetime.now(timezone.utc).timestamp())}",
                "email_subject": "¡Has recibido una transferencia de GoGuay!",
                "email_message": "Tienes fondos disponibles procedentes de tu monedero de GoGuay."
            },
            "items": [{
                "recipient_type": "EMAIL",
                "amount": {
                    "value": f"{cantidad_a_retirar:.2f}",
                    "currency": "EUR"
                },
                "receiver": cuenta_destino, # El email de PayPal del usuario
                "note": "Retirada de saldo de monedero GoGuay",
                "sender_item_id": f"transfer_{usuario_id}"
            }]
        }
        response = requests.post(f"{PAYPAL_API}/v1/payments/payouts", json=payout_payload, headers=headers)
        payout_data = response.json()
        if response.status_code not in [200, 201]:
            print("Error en Payout de PayPal:", payout_data)
            return jsonify({"error": "No se pudo procesar la transferencia en PayPal", "detalle": payout_data}), 400
    else:
        return jsonify ({"error": "Método de pago no soportado"}), 400

    try:
        monedero.saldo = saldo_actual - cantidad_a_retirar
        movimiento = registro_movimientos_monedero(
            usuario_id=usuario_id,
            concepto=MovimientosMonederoEnum.RETIRADA_FONDOS,
            cantidad=float(cantidad_a_retirar),
            referencia_id=f"retirada_{metodo_transferencia}_{usuario_id}"
        )
        db.session.commit()

        return jsonify({
            "mensaje": "Transferencia solicitada con éxito",
            "nuevo_saldo": float(monedero.saldo),
            "cantidad_retirada": float(cantidad_a_retirar),
            "metodo": metodo_transferencia
        }), 200
    
    except Exception as e:
        db.session.rollback()
        print(f"Error al procesar la retirada de fondos: {str(e)}")
        return jsonify({"error": f"Error interno al procesar la transferencia: {str(e)}"}), 500



    
    