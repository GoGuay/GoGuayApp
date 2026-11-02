
# # # # # # # # # # # # # # # # # # # # # # # # # # # # 
#  SERVICIO DEDICADO PARA LA INFORMACIÓN DEL USUARIO  #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # 

from datetime import datetime, timezone, timedelta
import random
import re
from io import BytesIO
import os


from flask import Blueprint, jsonify, render_template,  request
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

GOOGLE_CERTS_URL = 'https://www.googleapis.com/oauth2/v3/certs'


# Ininicialización del BluePrint
user_blueprint = Blueprint('user', __name__)

# Variables globales para correo y serializador
mail = None
serializer = None

# Configuraciones externas
WHATSAPP_TOKEN = "EAAPpcmD3hPgBSiuS8GVIjfJxi7YXXAhYHDZAiZBffXi9R8p0gFTZA8RouuSx8nW3qykA6qbVijF6Fj4zK3JqJd3JkxliPUdJACDjm0eGvBQNj5f3LrEFk5HGpFBI59wQP9S0MrJhqpZCerp5fQbQeKqq3L3GCasxhuuOJOGvCT9mEYwssZBtqomQ3dTcYdo0mqpOZCDcjsFv9I35hKgKbadmUPQc14UH6jtgZDZD"
WHATSAPP_PHONE_NUMBER_ID = "1353039247897514"

PAYPAL_CLIENT_ID = os.getenv('PAYPAL_CLIENT_ID')
PAYPAL_SECRET = os.getenv('PAYPAL_SECRET')
PAYPAL_API = os.getenv('PAYPAL_API')

GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')

CODIGOS_SIMULADOS = {}

##Configuración Twilio
# TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
# TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
# SERVICE_SID = os.getenv("TWILIO_SERVICE_SID")
# client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)


# =====================================================================
# 1. FUNCIONES DE APOYO Y UTILIDADES
# =====================================================================

def reenviar_correo_finreg(usuario):
    try:
        salt = 'email-verify'
        token = serializer.dumps(usuario.email, salt=salt)
        link_verificacion = f"http://localhost:4200/home?token={token}"
        msg = Message("Bienvenidx a GoGuay", recipients=[usuario.email])
        msg.html = render_template('correo_bienvenida.html', link=link_verificacion)
        mail.send(msg)
        
    except Exception as e:
        print(f"Error al enviar correo: {e}")


## CLOUDINARY: EXTRAE EL PUBLIC_ID DE UNA URL ##
def obtener_public_id(url):
    match = re.search(r'/([^/]+)\.[a-zA-Z]+$', url)
    if match:
        return match.group(1)
    return None

## REDUCIR EL TAMAÑO Y PESO FINAL DE UNA IMAGEN ##
def reducir_imagen(imagen, max_size=10485760):
    img = Image.open(imagen)
    output = BytesIO()
    calidad = 85

    max_resolution = (1920, 1080)
    img.thumbnail(max_resolution)

    formato = img.format.lower()

    while True:
        output.seek(0)        
        if formato in ['jpeg', 'jpg']:
            img.save(output, format="JPEG", quality=calidad, optimize=True)
        elif formato in ['png']:
            img.save(output, format="PNG", quality=calidad, optimize=True)
        elif formato == 'gif':
            img.save(output, format="GIF", optimize=True)
        else:
            img.save(output, format=formato, quality=calidad, optimize=True)

        if output.tell() <= max_size or calidad <= 10:
            break

        if calidad > 50:
            calidad -= 10
        else:
            calidad -= 5

    output.seek(0)
    return output



# =====================================================================
# 1. AUTENTICACIÓN, REGISTRO Y LOGIN
# =====================================================================

## CREAR NUEVO USUARIO - REGISTRO MANUAL ##
@user_blueprint.route('/registro', methods=['POST'])
def crear_usuario():
    data = request.json

    campos_obligatorios = ['nombre', 'apellidos', 'email', 'fecha_nacimiento', 'telefono']
    for campo in campos_obligatorios:
        if not data.get(campo):
            return jsonify({"error": f"Falta el campo obligatorio: {campo}"}), 400
    
    es_registro_google = str(data.get('es_google', False)).lower() in ['true', '1']
    password_raw = data.get('password')

    if not es_registro_google and not password_raw:
        return jsonify({"error": "La contraseña es obligatoria para el registro por la web"})

    email_normalizado = data['email'].lower()
    if Usuario.query.filter(Usuario.email.ilike(email_normalizado)).first():
        return jsonify({"error": "El correo electrónico ya existe"}), 400

    codificar_password = generate_password_hash(password_raw) if password_raw else None

    try:
        fecha_nac = datetime.strptime(data['fecha_nacimiento'], '%Y-%m-%d')
    except (ValueError, TypeError):
        return jsonify({"error": "El formato de la fecha de nacimiento no es válido. Usa YYYY-MM-DD"}), 400

    nuevo_usuario = Usuario(
        nombre=data['nombre'],
        apellidos=data['apellidos'],
        email=email_normalizado,
        password=codificar_password,
        telefono=data.get('telefono'),
        fotoPerfil=data.get('fotoPerfil'),
        orientacion=data.get('orientacion'),
        genero=data.get('genero'),
        biografia=data.get('biografia'),
        rolPerfil=data.get('rolPerfil', RolUsuarioEnum.usuario.value),
        fecha_nacimiento=fecha_nac,
        registroPrevio = True
    )
    try:
        db.session.add(nuevo_usuario)
        db.session.commit()
    except Exception as e:
        return jsonify({"error": f"Error al guardar en la base de datos: {str(e)}"}), 500

    # Crear monedero para el nuevo usuario
    monedero = Monedero(usuario_id=nuevo_usuario.id)
    db.session.add(monedero)
    db.session.commit()

    try:
        reenviar_correo_finreg(nuevo_usuario)
        
    except Exception as e:
        print(f"Error al enviar correo: {e}")

    return jsonify({
        "mensaje": "Usuario registrado correctamente. Por favor, verifica tu correo electrónico."
    }), 201


## CREAR NUEVO USUARIO - REGISTRO POR BOTÓN DE GOOGLE ##
@user_blueprint.route('/google-login', methods=['POST'])
def login_google():
    data = request.json or {}
    id_token_google = data.get('idToken') or data.get('token')
    if not id_token_google:
        return jsonify({"error": "falta el token de Google"}), 400
    
    try:
        id_info = id_token.verify_oauth2_token(
            id_token_google,
            google_requests.Request(),
            GOOGLE_CLIENT_ID
        )
        email = id_info.get('email', '').lower()
        nombre = id_info.get('given_name', id_info.get('name',''))
        apellidos = id_info.get('family_name', '')
        foto_perfil = id_info.get('picture')

        usuario_existente = Usuario.query.filter(Usuario.email.ilike(email)).first()

        if usuario_existente:
            access_token = create_access_token(identity=str(usuario_existente.id))
            return jsonify({
                "usuarioExistente": True,
                "mensaje": "Inicio de sesión correcto",
                "access_token": access_token,
                "usuario": usuario_existente.serialize()
            }),200
        else:                   
            return jsonify({
                "usuarioExistente": False,
                "datosGoogle": {
                    "email": email,
                    "nombre": nombre,
                    "apellidos": apellidos,
                    "foto_perfil": foto_perfil
                }
            }),200
    except ValueError:
            return jsonify({"error": "Token de Google inválido o expirado"}), 401
    except Exception as e:
            return jsonify({"error": f"Error en la verificación de Google: {str(e)}"}),500

## LOGIN DEL USUARIO AL SISTEMA ##
@user_blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    usuario = Usuario.query.filter_by(email=email).first()  

    if usuario is None:
        return jsonify({'Error': "No se ha encontrado el correo"}), 404

    if not check_password_hash(usuario.password, password):
        return jsonify({'Error': 'Contraseña incorrecta'}), 401

    access_token = create_access_token(identity=str(usuario.id))
    refresh_token = create_refresh_token(identity=str(usuario.id))

    return jsonify({
        'usuario': usuario.serialize(),
        'access_token': access_token,
        "refresh_token": refresh_token,
    }), 200

# Para generar un token de refresco -- para que la sesión no se bloquee a los 15 minutos que es la duración del token "normal"
@user_blueprint.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    usuario_id = get_jwt_identity()
    nuevo_access_token = create_access_token(identity=str(usuario_id))

    return jsonify({"access_token": nuevo_access_token}), 200







## COMPOBAR SI YA EXISTE UN MAIL DURANTE EL REGISTRO ##
@user_blueprint.route('/verificar-email-existente', methods=['GET'])
def verificar_email_existente():
    """
    1. Pedimos información con GET, los datos no vienen en un json sino en la URL de la petición.
    2. Pasa el correo a minúsculas, busca en la BD igonarando mayuculas/minúsculas, extra el primer usuario que encuentra, si no hay ninguno devuelve None.
    is not None --> convierte el resultado en un valor booleano. Si encuentra al usuario--No es None--True, Si no lo encuentra--Es None--False
    3. Devuelve un json con la respuesta.
    """
    email = request.args.get('email')
    if not email:
        return jsonify({"Error": "Email no encontrado"}), 400

    email_normalizado = email.lower()

    existe = Usuario.query.filter(Usuario.email.ilike(email_normalizado)).first() is not None
    return jsonify ({"existe": existe}), 200


## COMPOBAR SI YA EXISTE UN TELÉFONO DURANTE EL REGISTRO ##
@user_blueprint.route('/verificar-telefono-existente', methods=['GET'])
def verificar_telefono_existente():
    """Verifica si el teléfono ya existe en la base de datos durante un nuevo proceso de registro."""
    telefono = request.args.get('telefono')
    if not telefono:
        return jsonify({"Error": "Teléfono no encontrado"}), 400
    existe = Usuario.query.filter_by(telefono=telefono).first() is not None
    return jsonify({"existe": existe}), 200





## #OBTENER TODOS LOS USUARIOS ##
@user_blueprint.route('/obtener_usuarios', methods=['GET'])
def obtener_usuarios():
    """
    1. Con joinedload trae los datos de los usuarios + sus vehículos, monederos y puntuaciones. Es decir, trae todo de una vez.
    2. Con el .all trae todos los usuarios + los pedidos extras que hemos solicitado.
    3. en lista_usuarios ya trae toda esa información, y con usuario.serialize convierte el objeto en un diccionario de python y con jsonify lo convierte en formato json.  
    """
    lista_usuarios = Usuario.query.options(
        joinedload(Usuario.vehiculos),
        joinedload(Usuario.puntuaciones)
    ).all()
    
    return jsonify([usuario.serialize() for usuario in lista_usuarios])


## OBTENER USUARIO POR ID ##
@user_blueprint.route('/obtener_usuario_por_id/<int:id>', methods=['GET'])
@jwt_required()
def obtener_usuario_por_id(id):
    """
    1. Realiza una peticion a la tabla Usuarios de la base de datos, buscando por el Id (que obtiene de manera dinámica por la ruta con <int:id>), y lo guarda en usuario.
    2. Si no encuentra al usuario, devuelve error. Si lo encuentra lo convierte en un diccionario python y lo envía en formato Json con toda la información serializada.
    3. jwt_required: mira si en la petición que llega desde el front existe una cabecera llamada Authorization. Si el token no existe bloquea la petición y devuelve un 401 Unauthorized (401-Token expired; 422-Token falso o manipulado). Si el token es válido se ejecuta el código de esta función. 
    """
    usuario = Usuario.query.get(id)
    if usuario is None:
        return jsonify({"error": "Usuario no encontrado"}), 404
    
    return jsonify(usuario.serialize()), 200

@user_blueprint.route('/obtener_usuario_por_id_busqueda_viajes/<int:id>', methods=['GET'])
def obtener_usuario_por_id_busqueda_viajes(id):
    """
    1. Realiza una peticion a la tabla Usuarios de la base de datos, buscando por el Id (que obtiene de manera dinámica por la ruta con <int:id>), y lo guarda en usuario.
    2. Si no encuentra al usuario, devuelve error. Si lo encuentra lo convierte en un diccionario python y lo envía en formato Json con toda la información serializada.
    3. jwt_required: mira si en la petición que llega desde el front existe una cabecera llamada Authorization. Si el token no existe bloquea la petición y devuelve un 401 Unauthorized (401-Token expired; 422-Token falso o manipulado). Si el token es válido se ejecuta el código de esta función. 
    """
    usuario = Usuario.query.get(id)
    if usuario is None:
        return jsonify({"error": "Usuario no encontrado"}), 404
    
    return jsonify(usuario.serialize_public()), 200


## EDITAR INFORMACIÓN DE UN USUARIO ##
@user_blueprint.route('/editarusuario/<int:usuario_id>', methods=['PUT'])
@jwt_required()
def actualizar_usuario(usuario_id):
    """
    1. Con el método PUT actualizamos un recurso que ya existe.
    2. get_or_404(user_id) --> busca al usuario por ID, si lo encuentra lo guarda en usuario, si no devuelve error y para la función. Equivale a "if usuario is None"
    3. Captura los datos que el usuario envió desde el formulario en formato JSON y lo guarda en data.
    4. Bucle "for key in" --> recorre todos los campos que se permiten editar.
    5. "if key in data data[key] is not None: " --> "Si el campo está presente en los datos recibidos y además su valor no es nulo, procede a actualizarlo.
    6. Si el campo es "fecha_nacimiento" --> toma la fecha en formato texto y lo convierte en fecha de python (strptime). Con setattr guarda esa fecha ya formateada en el campo "fecha_nacimiento" del usuario.
    7. else: para el resto de keys, coge el objeto usuario, la key correspondiente y lo que tenga el valor de esa key y lo guarda con setattr.
    8. commit: guarda en base de datos los cambios.
    9 Devuelve la información de los cambios en formato json.
    """
    
    current_user_id = get_jwt_identity()
    print('current_user_id: ', current_user_id)

    if int(current_user_id) != usuario_id:
        return jsonify({"error": "No tienes permiso para editar este perfil"}), 403
    
    usuario = Usuario.query.get_or_404(usuario_id)
    data = request.json

    if 'email' in data and data ['email'] and data ['email'] != usuario.email:
        email_existente = Usuario.query.filter_by(email=data['email']).first()
        if email_existente:
            return jsonify({"error": "el correo electrónico ya está registrado en base de datos"})
        
    if 'telefono' in data and data ['telefono'] and data ['telefono'] != usuario.telefono:
        telefono_existente = Usuario.query.filter_by(telefono=data['telefono']).first()
        if telefono_existente:
            return jsonify({"error": "el teléfono ya está registrado en base de datos"})     

    for key in ['nombre', 'apellidos', 'pronombre', 'genero', 'orientacion', 'biografia', 'fecha_nacimiento', 'preferencias', 'email', 'telefono', 'comunic_comerciales', 'comunic_terceros', 'paypal_email', 'tarjeta_info', 'metodo_cobro_preferido', 'cobro_paypal_email', 'cobro_iban',  'cobro_titular' ]:
        if key in data and data[key] is not None:  
            if key == 'fecha_nacimiento' and data[key]:
                setattr(usuario, key, datetime.strptime(data[key], '%Y-%m-%d'))  
            else:
                setattr(usuario, key, data[key])      
    
    db.session.commit()  
    return jsonify(usuario.serialize()), 200 


def procesar_eliminacion_usuario(usuario):
    """
    1. Se valida el monedero del usuario: que no tenga saldo positivo ni retiradas en las últimas 72h.
    2. Se validan los viajes: que no haya viajes en curso, recientes con - 72h o futuros como conductor y/o pasajero.
    3. Si pasa las validaciones: se aplica el borrado lógico y se establecen fechas límites del ciclo de vida
    4. Se limpiand datos sensibles de pago/cobro y se guardan cambios
    """
    ahora = datetime.now(timezone.utc)
    hace_72h = ahora -timedelta(hours=72)
    #Control de saldo y retirada reciente de saldo
    if usuario.monedero:
        if usuario.monedero.saldo > 0:
            return jsonify({
                "error": "No se puede eliminar la cuenta",
                "motivo": "Tienes saldo a favor en tu monedero. Debes solicitar la transferencia antes de proceder."
            }), 400
        
        fecha_ultima_retirada = usuario.monedero.obtener_ultima_retirada()
        if fecha_ultima_retirada:
            if fecha_ultima_retirada.tzinfo is None:
                fecha_ultima_retirada = fecha_ultima_retirada.replace(tzinfo=timezone.utc)
            if fecha_ultima_retirada >= hace_72h:
                return jsonify({
                    "error": "No se puede eliminar tu cuenta",
                    "motivo": "Has realizado una retirada de fondos hace menos de 72h. Debes esperar a que transcurra este plazo por seguridad"
                }), 400
    #Control de viajes (futuros, en curso y pasados < 72h)
    viajes_como_conductor = usuario.viajes_publicados or []
    viajes_como_pasajero = [reserva.viaje for reserva in usuario.reservas_realizadas if reserva.viaje]
    todos_los_viajes = list(set(viajes_como_conductor+viajes_como_pasajero))
    for v in todos_los_viajes:
        if not v or not v.fecha_salida:
            continue
        fecha_salida = v.fecha_salida
        if fecha_salida.tzinfo is None:
            fecha_salida = fecha_salida.replace(tzinfo=timezone.utc)
        if hace_72h <= fecha_salida <= ahora:
            return jsonify({
                "error": "No puedes eliminar tu cuenta",
                "motivo": "Tienes un viaje en curso en este momento."
            }), 400
        if fecha_salida > ahora or v.estado_viaje == EstadoViajeEnum.PROXIMO.value:
            if v.estado_viaje != EstadoViajeEnum.CANCELADO.value:
                return jsonify({
                    "error": "No puedes eliminar tu cuenta",
                    "motivo": "Tienes viajes futuros programados o reservas activas. Debes cancelarlos antes de proceder."
                }), 400
    #Borrado lógico y limpieza de datos sensibles
    usuario.perfil_eliminado_por_usuario = True
    usuario.fecha_eliminacion_por_usuario = ahora
    usuario.fecha_limite_reactivacion = ahora + timedelta(days=30)
    usuario.fecha_prevista_borrado_definitivo = ahora + timedelta(days=180)
    #Limpieza métodos de cobro/pago
    usuario.metodo_pago_preferido = None
    usuario.paypal_email = None
    usuario.tarjeta_numero = None
    usuario.tarjeta_caducidad = None
    usuario.tarjeta_titular = None
    usuario.cobro_paypal_email = None
    usuario.cobro_iban = None
    usuario.cobro_titular = None
    
    db.session.commit()

    return jsonify({
        "mensaje": "Perfil eliminado correctamente. Tienes 30 días para reactivarlo simplemente iniciando sesion"
    }), 200

## ELIMINAR USUARIO POR ID ##
@user_blueprint.route('/eliminar_usuario/<int:id>', methods=['DELETE'])
@jwt_required()
def eliminar_usuario(id):
    """
    1. Verifica que el uuario autenticado es el dueño del perfil.
    2. BUsca al usuario en la BD
    3. Delega la lógica de borrado en la función 'procesar_eliminacion_usuario'.
    """
    current_user_id = get_jwt_identity()

    if int(current_user_id) != int(id):
        return jsonify({"error": "No tienes permiso para editar este perfil"}), 403
    
    usuario = Usuario.query.get(id)
    
    if usuario is None:
        return jsonify({"error": "No se ha encontrado al usuario"}), 404
    
    return procesar_eliminacion_usuario(usuario)


## --- FUNCIONES DE APOYO (UTILIDADES) --- ##







## ACTUALIZAR IMAGEN DE PERFIL ##
@user_blueprint.route('/actualizar_imagen_perfil/<int:usuario_id>', methods=['PUT'])
def actualizar_imagen_perfil(usuario_id):
    """
    1. A través del ID dinámico del usuario, realiza una búsqueda de dicho usuario y detiene el proceso si no lo encuentra.
    2. request.files.get --> captura la imagen que el usuario subió bajo el nombre imagenPerfil y la guarda en imagen. Si no envió ninguna imagen, se detiene la función.
    3. if user.fotoPublicId --> revisa si el usuario tenía una imagen anterior de perfil. Si la tiene la destruye para no almacenar basura digital en Cloudinary
    4. Aplica la función de reducir imagen.
    5. carpeta_usuario = f"user_{user_id}" --> crea un nombre de carpeta dinámico
    6. uploader.upload() --> envía la imagen optimizada a cloudinary. El servidor responde con un diccionario result que contiene secure_url y el nuevo id unico (public_id)
    7. user.fotoPerfil = result['secure_url'] --> Guarda la nueva información de la imagen
    8. user.fotoPublicId = result['public_id'] --> Guarda el nuevo ID para poder borrar esta imagen en el futuro si el usuario quiere.
    9. db.session.commit --> Guarda los cambios en la BD
    10. Devuelve un Json con mensaje de exito y la nueva URL para que el front pueda mostrar la nueva imagen actualizada inmediatamente sin tener que recargar.
    """
    user = Usuario.query.get_or_404(usuario_id)

    imagen = request.files.get('imagenPerfil')
    if not imagen:
        return jsonify({"error": "No se ha enviado ninguna imagen."}), 400

    if user.fotoPublicId:
        uploader.destroy(user.fotoPublicId)

    imagen = reducir_imagen(imagen) 

    carpeta_usuario = f"user_{usuario_id}"
    result = uploader.upload(imagen, folder=carpeta_usuario)

    user.fotoPerfil = result['secure_url']
    user.fotoPublicId = result['public_id']
    db.session.commit()

    return jsonify({"mensaje": "Imagen de perfil actualizada correctamente", "url": result['secure_url']}), 200


## ELIMINAR IMAGEN DE PERFIL ##
@user_blueprint.route('/eliminar_imagen_perfil/<int:usuario_id>', methods=['DELETE'])
def eliminar_imagen_perfil(usuario_id):
    """
    1. A través del ID dinámico del usuario, realiza una búsqueda de dicho usuario y detiene el proceso si no lo encuentra.
    2. Si el usuario no tiene foto de perfil, detiene el proceso.
    3. uploader.destroy --> método para destruir la imagen del perfil que tenga el usuario. A continuación pone los valores fotoPerfil y fotoPublicId a en nulos y guarda los cambios con el commit.
    4. Devuelve un mensaje de éxito en la función. Si el intento de eliminarla tiene algun fallo devuelve otro mensaje de error.
    """
    user = Usuario.query.get_or_404(usuario_id)

    if not user.fotoPublicId:
        return jsonify({"error": "El usuario no tiene una imagen de perfil."}), 404
    
    try:
        # Destruye la imagen en el servidor externo
        uploader.destroy(user.fotoPublicId)

        # Resetea valores a nulo y guarda cambios
        user.fotoPerfil = None
        user.fotoPublicId = None
        db.session.commit()

        return jsonify({"mensaje": "Imagen de perfil eliminada correctamente."}), 200
    except Exception as e:
        return jsonify({"error": "No se pudo eliminar la imagen."}), 500


## CLOUDINARY -- ACTUALIZAR IMAGEN DE CABECERA - Componente: Perfil pùblico ##
@user_blueprint.route('/actualizar_imagen_cabecera/<int:usuario_id>', methods=['PUT'])
def actualizar_imagen_cabecera(user_id):
    """
    1. A través del ID dinámico del usuario, realiza una búsqueda de dicho usuario (404 si no existe).
    2. Obtiene el archivo desde 'imagenCabecera'. Si no hay archivo, detiene el proceso con un error 400.
    3. Si el usuario ya tiene una fotoCabecera, extrae su public_id de la URL y elimina el archivo anterior en Cloudinary.
    4. Aplica la función reducir_imagen si fuese necesario.
    5. Sube la nueva imagen a la carpeta específica del usuario (creándola si no existe).
    6. Actualiza la URL en la base de datos, guarda los cambios (commit) y retorna la nueva 'secure_url'.
    """
    user = Usuario.query.get_or_404(user_id)

    imagen = request.files.get('imagenCabecera')
    if not imagen:
        return jsonify({"error": "No se ha enviado ninguna imagen."}), 400

    if user.fotoCabecera:
        public_id = obtener_public_id(user.fotoCabecera)
        if public_id:
            uploader.destroy(public_id)
    
    imagen = reducir_imagen(imagen)

    carpeta_usuario = f"user_{user_id}"
    result = uploader.upload(imagen, folder=carpeta_usuario)

    user.fotoCabecera = result['secure_url']
    db.session.commit()

    return jsonify({"mensaje": "Imagen de cabecera actualizada correctamente", "url": result['secure_url']}), 200






## ENVÍO DE SMS AL TFNO DEL USUARIO PARA VERIFICAR PERFIL ##
# @user_blueprint.route('/enviar_sms', methods=['POST'])
# def enviar_sms():
#     """
#     1. Obtiene el json desde el front y accede al campo 'teléfono' y le pasa el dato a 'telefonoAVerificar'.
#     2. Si no hay teléfonoAVerificar, lanza un error y detiene la función.
#     3. try: Se llama al servicio de Twilio para enviar el mensaje. Se le pasa a 'to' el numero y se elige 'sms' como canal. 
#     4. Devolvemos un json con la respuesta y con el verification_sid (sólo es un id para identificar si el mensaje se ha enviado correctamente.)
#     5. Si lo anterior da algun error, lo mostramos con el except. 
#     """
#     data = request.get_json()
#     telefonoAVerificar = data.get('telefono')

#     if not telefonoAVerificar:
#         return jsonify({'success': False, 'message': 'Teléfono no proporcionado'}), 400

#     # MODO DESARROLLO / SIMULACIÓN PARA ESPAÑA (+34)#########################################
#     if str(telefonoAVerificar).startswith('+34') or str(telefonoAVerificar).startswith('34') or len(str(telefonoAVerificar)) == 9:
#         # Aseguramos formato limpio para la clave
#         num_limpio = str(telefonoAVerificar).replace('+34', '')
        
#         # Generamos un código aleatorio de 6 dígitos
#         codigo_simulado = str(random.randint(100000, 999999))
#         CODIGOS_SIMULADOS[num_limpio] = codigo_simulado
        
#         # 🖨️ IMPRIME EL CÓDIGO EN TU TERMINAL DE PYTHON
#         print(f"\n==================================================")
#         print(f" [DEV MODE] Código SMS para {telefonoAVerificar}: {codigo_simulado}")
#         print(f"==================================================\n")
        
#         return jsonify({
#             "success": True,
#             "message": "Código de verificación enviado correctamente (Simulado)",
#             "verification_sid": "mock_sid_123"
#         })
#     ####################################################################################

#     try:
#         verification = client.verify.v2.services(SERVICE_SID).verifications.create(
#             to=telefonoAVerificar,
#             channel="sms"
#         )

#         # 2. Devolver el ID de la verificación (hay que guardarlo en BD/session)
#         return jsonify({
#             "success": True,
#             "message": "Código de verificación enviado correctamente",
#             "verification_sid": verification.sid
#         })

#     except Exception as e:
#         return jsonify({'success': False, 'message': str(e)}), 500


## COMPROBACIÓN DEL CÓDIGO ENVIADO POR SMS ##
# @user_blueprint.route('/verificar_codigo', methods=['POST'])
# def verificar_codigo():
#     """
#     1. Se accede al json enviado desde el front, se extrae el dato 'telefono' y el dato 'codigo'.
#     2. Si no hay telefono devuelve error y detiene la función.
#     3. Añade al número de teléfono el prefijo de España y lo convertimos a string por petición de la API, llama al servicio de Twilio (verification_checks_create) y le pasa el teléfono ya con el prefijo y el codigo. La respuesta de ese servicio se guarda en la variable 'result'.
#     4. Si la respuesta es 'approved', busca en la BD de la tabla Usuarios por número de tfno, coge el primer resultado y si ademas si hay usuario pasa el atributo telefonoVerificado a True, guarda los cambios y con el refresh actualiza todo para obtener todos los datos del usuario actualizados. Si todo está correcto devuelve un json con un mensaje de OK, sino devuelve un mensaje de error. 
#     5. Except: devuelve un mensaje si el proceso ha fallado. 
#     """
#     data = request.get_json()
#     phone_number = data.get('telefono')
#     codigo = data.get('codigo')

#     if not phone_number  or not codigo:
#         return jsonify({'success': False, 'message': 'Datos incompletos'}), 400
    
#     # MODO DESARROLLO / VALIDACIÓN SIMULADA#######################################
#     num_limpio = str(phone_number).replace('+34', '')
#     if num_limpio in CODIGOS_SIMULADOS:
#         codigo_correcto = CODIGOS_SIMULADOS.get(num_limpio)
        
#         if str(codigo) == str(codigo_correcto):
#             # Limpiamos el código usado
#             del CODIGOS_SIMULADOS[num_limpio]
            
#             # Actualizamos la base de datos igual que en el flujo real
#             usuario = Usuario.query.filter_by(telefono=num_limpio).first()
#             if usuario:
#                 usuario.telefonoVerificado = True
#                 db.session.commit()
#                 db.session.refresh(usuario)
            
#             return jsonify({"success": True, "message": "Teléfono verificado ✅ (Simulado)"}), 200
#         else:
#             return jsonify({"success": False, "message": "Código incorrecto ❌"}), 400
#     #############################################################################

#     try:
#         telefono_formateado = "+34" + str(phone_number)
#         result = client.verify.v2.services(SERVICE_SID).verification_checks.create(
#             to=telefono_formateado,
#             code=codigo
#         )
        
#         if result.status == "approved":
#             usuario = Usuario.query.filter_by(telefono=phone_number).first()
#             if usuario:
#                 usuario.telefonoVerificado = True
#                 db.session.commit()
#                 db.session.refresh(usuario)
            
#             return jsonify({"success": True, "message": "Teléfono verificado ✅"}), 200
#         else:
#             return jsonify({"success": False, "message": "Código incorrecto ❌"}), 400

#     except Exception as e:
#         return jsonify({'success': False, 'message': str(e)}), 500


# NUEVA FUNCIÓN DE ENVIO DE CODIGO ALEATORIO POR WHATSAPP
@user_blueprint.route('/enviar_sms', methods=['POST'])
def enviar_sms():
    data = request.get_json()
    idioma = data.get('idioma_app')
    telefonoAVerificar = data.get('telefono')

    if not telefonoAVerificar:
        return jsonify({'success': False, 'message': 'Teléfono no proporcionado'})
    
    num_limpio = str(telefonoAVerificar).replace('+','').strip()
    if not num_limpio.startswith('34') and len (num_limpio) == 9:
            num_limpio = '34' + num_limpio
    
    codigo_verificacion = str(random.randint(100000, 999999))
    CODIGOS_SIMULADOS[num_limpio] = codigo_verificacion
    cuerpo_mensaje_ingles = f"Your code verification of GoGuay is: {codigo_verificacion}"
    cuerpo_mensaje_espanol = f"Tu código de verificación de GoGuay es: {codigo_verificacion}"

    if idioma == 'es':
        cuerpo_mensaje = cuerpo_mensaje_espanol
    else:
        cuerpo_mensaje = cuerpo_mensaje_ingles



    url = f"https://graph.facebook.com/v19.0/{WHATSAPP_PHONE_NUMBER_ID}/messages"

    headers = {
        "Authorization": f"Bearer {WHATSAPP_TOKEN}",
        "Content-Type": "application/json"
    }
    payload = {
        "messaging_product": "whatsapp",
        "to": num_limpio,
        "type": "text",
        "text": {
            "body": cuerpo_mensaje
        }
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        res_data = response.json()

        if response.status_code == 200 and 'messages' in res_data:
            return jsonify ({
                "success": True,
                "message": "Código de verificación enviado por WhatsApp correctamente",
                "verification_sid": res_data['messages'][0]['id']
            })
        else:
            print("Error devuelto por Meta:", res_data)
            return jsonify({
                'success': False, 
                'message': res_data.get('error', {}).get('message', 'Error al enviar WhatsApp')
            }), 400
    
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


@user_blueprint.route('/verificar_codigo', methods=['POST'])
def verificar_codigo():
    data = request.get_json()
    telefono_usuario = data.get('telefono')
    codigo = data.get('codigo')

    if not telefono_usuario or not codigo:
        return jsonify({'success': False, 'message': 'Datos incompletos'}), 400
    
    num_limpio = str(telefono_usuario).replace('+', '').strip()
    if not num_limpio.startswith('34') and len(num_limpio) == 9:
        num_limpio = '34' + num_limpio

    if num_limpio in CODIGOS_SIMULADOS:
        codigo_correcto = CODIGOS_SIMULADOS.get(num_limpio)

        if str(codigo) == str(codigo_correcto):
            del CODIGOS_SIMULADOS[num_limpio]

            usuario = Usuario.query.filter_by(telefono=telefono_usuario).first()
            if usuario:
                usuario.telefonoVerificado = True
                db.session.commit()
                db.session.refresh(usuario)
            return jsonify({"success": True, "message": "Teléfono verificado"}), 200
        else:
            return jsonify({"success": False, "message": "Código incorrecto"}), 400
    else:
        return jsonify({"success": False, "message": "No hay ningún código pendiente para este número o ha expirado"}), 400
    


## ENVIAR CORREO DE VERIFICACIÓN DE EMAIL AL USUARIO ##
@user_blueprint.route('/enviar_email', methods=['POST'])
def enviar_email():
    """
    1. Extraemos del json el campo 'email' y lo guardamos en 'email'.
    2. salt y token --> encriptan la información que contiene el correo del usuario y caracteres que hacen único ese token.
    3. Se crea la URL que el usuario verá en su correo. El token va como parámetro. Cuando el usuario hace clic la aplicación puede leer ese token y saber que mail
    se está verificando sin que el usuario tenga que escribir nada.
    4.Se define el asunto del correo y cuerpo del mensaje
    5. mail.send --> Se conecta al servidor de correo configurado en la App de Flask, insertando el enlace generado anteriormente. 
    """
    email = request.json['email']

    salt = 'email-verify'
    token = serializer.dumps(email, salt=salt)

    print('Token generado: ', token)
    link= f"http://localhost:4200/finalizar-registro/{token}"
    msg = Message("Verifica tu correo", recipients=[email])
    msg.body = f"Por favor haz click en el siguiente enlace para verificar tu correo: {link}"
    
    mail.send(msg)

    return jsonify({'message': 'Correo enviado'}), 200


## ENVIAR CORREO DE PARA MODIFICAR EL CORREO ELECTRÓNICO DE UN USUARIO ##
@user_blueprint.route('/mail_modificacion_correo', methods=['POST'])
def mail_modificacion_correo():
    """
    """
    email_nuevo = request.json['email']

    salt = 'email-verify'
    token = serializer.dumps(email_nuevo, salt=salt)

    link = f"http://localhost:4200/modificacion-correo/{token}"
    msg = Message("Modifica tu correo de GoGuay", recipients=[email_nuevo])
    msg.body = f"Por favor haz click en el siguiente enlace para modificar tu correo: {link}"
    mail.send(msg)

    return jsonify({'message': 'Correo enviado'}), 200




## Pone al usuario como RegistroFinalizado en True y verifica el email del usuario a la vez ##
@user_blueprint.route('/email_finalizar_registro', methods=['POST'])
def email_finalizar_registro():
    """
    """
    token = request.json['token']
    salt = 'email-verify'
    try:

        email = serializer.loads(token, salt=salt)
        print(f"Email extraído del token: {email}") 
        usuario = Usuario.query.filter_by(email=email).first()
        if not usuario:
            return jsonify({'error': 'Usuario no encontrado'}), 404
        if usuario.emailVerificado or usuario.registroFinalizado:
            return jsonify({'error': 'Este enlace de verificación ya ha sido utilizado'}), 400
        
        usuario.emailVerificado = True
        usuario.registroFinalizado = True
        db.session.commit()
        access_token = create_access_token(identity=str(usuario.id))
        refresh_token = create_refresh_token(identity=str(usuario.id))
        print('usuario:', usuario)
        usuario_data = {
            "id": usuario.id,
            "nombre": usuario.nombre,
            "apellidos": usuario.apellidos,
            "fecha_nacimiento": usuario.fecha_nacimiento,
            "genero": usuario.genero,
            "orientacion": usuario.orientacion,
            "telefono": usuario.telefono,
            "email": usuario.email,
            "fotoPerfil": usuario.fotoPerfil,
            "rolPerfil": usuario.rolPerfil
        }

        return jsonify({
            'message': 'Correo verificado correctamente',
            'access_token': access_token,
            'refresh_token': refresh_token,
            'usuario': usuario_data
        }), 200
        

    except Exception as e:
        print(f"Error al verificar token: {e}")
        return jsonify({'error': 'Token invalido o expirado'}), 400


## ENVIAR CORREO DE RESTAURACIÓN DE CONTRASEÑA AL USUARIO ##
@user_blueprint.route('/enviar_email_resetpassword', methods=['POST'])
def enviar_email_reset_password():
    """
    1. Se recibe el campo email en el cuerpo del json y se guarda en 'email'.
    2. salt y token --> encriptan la información que contiene el correo del usuario y caracteres que hacen único ese token.
    3. Se crea la URL que el usuario verá en su correo. El token va como parámetro. Cuando el usuario hace clic la aplicación puede leer ese token y saber que mail
    se está verificando sin que el usuario tenga que escribir nada.
    4.Se define el asunto del correo y cuerpo del mensaje (se coge una plantilla con formato)
    5. mail.send --> Se conecta al servidor de correo configurado en la App de Flask, insertando el enlace generado anteriormente. 
    """
    email = request.json['email']

    salt = 'password-reset'
    token = serializer.dumps(email, salt=salt)

    link= f"http://localhost:4200/nueva-contrasena/{token}"

    msg = Message("Reseteo de contraseña PrideRide", recipients=[email])
    msg.html = render_template('email_reset_password.html', link=link)
    mail.send(msg)
    
    return jsonify({'message': 'Correo enviado'}), 200



## FUNCIÓN PARA RESTABLECER LA CONTRASEÑA CON EL CORREO RECIBIDO ##
@user_blueprint.route('/restablecerpassword', methods=['POST'])
def restablacerpassword():
    """
    1. Se extrae el campo token del json y se guarda en token, igual con el password que se guarda en nueva_password.
    2. if: si no hay token o nueva_password retorna un error y se detiene la función.
    3. Consulta a la tabla TokenUsado. Se busca el token, si ya aparece y es igual que el que le estamos pasando da un error y sale.
    4. Con el serializer abre el token, extrae el email y lo guarda en la variable email, si el token se genero hace más de 1800 segundo da error pasando al Except. En este paso se busca la relación email-token.
    5. Busca al usuario por el email en la tabla usuario. Si no lo encuentra, devuelve error. 
    6. generate_password_hash --> toma la nueva contraseña, la hashea y la guarda en la propiedad password del usuario. Guarda los cambios con commit.
    7. Guarda el token en la tabla de TokenUsado para que no se pueda reutilizar. Si se hace se detectaría en el paso 3.
    8. except SignatureExpired --> cuando han pasado más de 1800 segundos desde que se creo el token // badSignature --> cuando el token ha sido manipulado y no es el original // Exception as e --> error genérico. 
    """
    token = request.json.get('token')
    print(f"Token recibido: {token}")
    nueva_password = request.json.get('password')
    salt = 'password-reset'

    if not token or not nueva_password:
        return jsonify({'error': 'Faltan datos'}), 400

    if TokenUsado.query.filter_by(token=token).first():
        return jsonify({'error': 'Token ya utilizado'}), 400

    try:
        email = serializer.loads(token, salt=salt, max_age=1800)
        usuario = Usuario.query.filter_by(email=email).first()
        if not usuario:
            return jsonify({"Error": "Usuario no encontrado"}),404
        
        usuario.password = generate_password_hash(nueva_password)
        db.session.commit()

        token_usado = TokenUsado(token=token)
        db.session.add(token_usado)
        db.session.commit()
        return jsonify({"mensaje": "Contraseña reestablecida correctamente"}), 200  

    
    except SignatureExpired as e:
        print(f"Token expirado: {e}") 
        return jsonify({"error": "Token expirado"}), 400
    except BadSignature as e:
        print(f"Token inválido: {e}")
        return jsonify({"Error": "Token inválido"}), 400
    except Exception as e:
        print(f"Error al reestablecer la contraseña: {e}")
        return jsonify ({"error": "Token inválido o expirado"}), 400


## FUNCIÓN PARA COMPROBAR EL ESTADO DE VIDA DEL TOKEN ##
@user_blueprint.route('/comprobacion_token', methods= ['GET'])
def comprobacion_token():
    """
    1. Se extrae el campo token de la url y se guarda en token. Si no existe token, devuelve error y sale de la función.
    2. En la tabla de TokenUsado filtra el token con el token guardado y obtiene el primer resultado: asi comprueba si el token ya ha sido usado. 
    3. Con el serializer abre el token, extrae el email y lo guarda en la variable email, si el token se genero hace más de 1800 segundo da error pasando al Except. En este paso se busca la relación email-token.
    4. except SignaturaExpired: lanza error cuando el token ha caducado (el usuario ha clicado demasiado tarde)
    5. except Exception: valida otro tipo de errores. 
    """
    token = request.args.get('token')

    if not token:
        return jsonify({"error": "No se ha encontrado token"}), 404
    
    if TokenUsado.query.filter_by(token=token).first():
        return jsonify({'error': 'Token ya utilizado'}), 200

    try:
        email = serializer.loads(token, salt='password-reset', max_age=1800)  
        return jsonify({'mensaje': 'Token válido', 'email': email}), 200

    except SignatureExpired as e:
        print(f"Token expirado: {e}") 
        return jsonify({"error": "Token expirado"}), 200

    except Exception as e:
        print(f"Error validando token: {e}")
        return jsonify({"error": "Token inválido"}), 400
    

## FUNCIÓN PARA VERIFICAR SI LA CONTRASEÑA ACTUAL ES LA CORRECTA ##
@user_blueprint.route('/comprobarpwactual', methods=['POST'])
def comprobarpwactual():
    """
    1. Obtiene el id y el password del json y los guarda en 'id' y 'password' respectivamente. 
    2. Busca el usuario en la tabla Usuario filtrando por el id y guardando la primera coincidencia que encuentre.
    3. Si no encuentra al usuario devuelve un error y sale de la función. 
    4. Hace el print de la contraseña hasheada. 
    5. check_password_hash -->  toma la contraseña que escribió el usuario, le aplica el mismo algoritmo de cifrado y comprueba si el resultado coincide con el hash guardado (usuario.password). Si coinciden devuelve un True (el usuario ha acreaditado quien es), si no devuelve un false y devuelve un código de estado (no autorizado) 
    """
    data = request.get_json()
    id_usuario = data.get('id')
    password = data.get('password', '').strip()

    usuario = Usuario.query.filter_by(id=id_usuario).first()

    if usuario is None:
        return jsonify({'error:': 'usuario no encontrado'}), 404
    
    print("\n========== SPRINT DE DIAGNÓSTICO ==========")
    print(f"Contraseña limpia recibida del front: '{password}'")
    print(f"Hash real en tu Base de Datos: '{usuario.password}'")
    print("===========================================\n")

    if check_password_hash(usuario.password, password):
        return jsonify({'isValid': True}), 200
    else:
        return jsonify({'isValid': False}), 401
    

## FUNCIÓN PARA CAMBIAR LA CONTRASEÑA DESDE LA VENTANA DE AJUSTES ##
@user_blueprint.route('/cambiopassword/<int:id>', methods=['PUT'])
def cambiopassword(id):
    """
    1. Obtiene al usuario del json por el id y lo guarda en usuario. Si no existe, devuelve error si no lo encuentra y sale
    2. Obtiene el contenido del json y lo guarda en data. Obtiene el campo 'password' y lo guarda en nueva_password. Si no existe, devuelve un error y sale de la función.
    3. con generate_password_hash coge la contraseña plana del usuario y la convierte en un hash irreversible, y la guarda en nueva_password_hash
    4. Esa contraseña hasheada la guarda en el campo password del uusuario. Con el commit sincroniza los cambios del objeto en la base de datos.  
    """
    usuario = Usuario.query.get(id)
    if usuario is None:
        return jsonify({'error': 'usuario no encontrado'})
    
    data = request.json
    nueva_password = data.get('password')

    if not nueva_password:
        return jsonify({'error': 'La nueva password es requerida'}), 400
    
    nueva_password_hash = generate_password_hash(nueva_password)
    usuario.password = nueva_password_hash

    db.session.commit()

    return jsonify({'mensaje': 'nueva contraseña actualizada con éxito'}), 200



## --- RUTAS DE PAYPAL --- ##

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


# Recibe los datos del viaje con el precio de este. 
@user_blueprint.route("/create-order", methods=['POST'])
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
        
    email_conductor = viaje.creador.paypal_email or "goguay_empresa@business.example.com"
    
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
            "payee": {
                "email_address": email_conductor  
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

# Captura el pago de la orden creada en PayPal
# 
@user_blueprint.route("/capture-order/<order_id>", methods=['POST'])
def capture_order(order_id: str):
    token = get_access_token()
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    response = requests.post(f"{PAYPAL_API}/v2/checkout/orders/{order_id}/authorize", headers=headers)
    
    capture_data = response.json()
    
    if response.status_code not in [200, 201]:
        print(f"❌ Error al capturar la orden {order_id}:", capture_data)
        return jsonify(capture_data), response.status_code
    
    try:
        authorization_id = capture_data['purchase_units'][0]['payments']['authorizations'][0]['id']
        
        orden_paypal = Ordenes_Paypal.query.filter_by(paypal_order_id=order_id).first()
        
        if orden_paypal:
            # 3. Buscamos el registro en PasajeroViaje y le guardamos el auth_id
            pasajero_viaje = PasajeroViaje.query.filter_by(
                viaje_id=orden_paypal.viaje_id, 
                usuario_id=orden_paypal.pasajero_id
            ).first()
            
            if pasajero_viaje:
                pasajero_viaje.paypal_auth_id = authorization_id
                db.session.commit()
                print(f"✅ Authorization ID {authorization_id} guardado en PasajeroViaje.")

    except (KeyError, IndexError) as e:
        print("❌ Error extrayendo el authorization_id:", e)
        return jsonify({"error": "No se pudo extraer el ID de autorización", "detalle": capture_data}), 500

    return jsonify(capture_data), 200
    
    


