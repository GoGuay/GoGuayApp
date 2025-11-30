
# # # # # # # # # # # # # # # # # # # # # # # # # # # # 
#  SERVICIO DEDICADO PARA LA INFORMACIÓN DEL USUARIO  #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # 

from datetime import datetime
import random
from flask import Blueprint, jsonify, render_template,  request
from itsdangerous import SignatureExpired, BadSignature
import nexmo
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
from flask_jwt_extended import create_access_token
from models.tokensusados import TokenUsado
from extensions import db
from sqlalchemy.orm import joinedload 
from models import Usuario, Monedero, MovimientoMonedero, RolUsuarioEnum
from cloudinary import uploader, utils
import re
from PIL import Image
from io import BytesIO
from flask_cors import CORS
from flask_mail import Mail, Message
from prelude_python_sdk import Prelude
import os
from twilio.rest import Client
from sqlalchemy import func




# Nombre único para evitar conflictos
user_blueprint = Blueprint('user', __name__)



mail = None
serializer = None


API_KEY_PRELUDE = os.getenv("API_KEY_PRELUDE")

client = Prelude(
    api_token=API_KEY_PRELUDE,


)



##Configuración Twilio
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
SERVICE_SID = os.getenv("TWILIO_SERVICE_SID")

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)


otp_store = {}








# # # # # # # # # # # # # # # # # # # #
#       REGISTRAR USUARIO NUEVO
# # # # # # # # # # # # # # # # # # # #
@user_blueprint.route('/registro', methods=['POST'])
def crear_usuario():
    data = request.json

    # Campos obligatorios
    campos_obligatorios = ['nombre', 'apellidos', 'email', 'password']
    for campo in campos_obligatorios:
        if campo not in data:
            return jsonify({"error": f"Falta el campo obligatorio: {campo}"}), 400

    # Normalizar email a minúsculas
    email_normalizado = data['email'].lower()

    # Verificar si el email ya existe (case-insensitive)
    if Usuario.query.filter(Usuario.email.ilike(email_normalizado)).first():
        return jsonify({"error": "El correo electrónico ya existe"}), 400

    # Codificar password
    codificar_password = generate_password_hash(data['password'])

    # Crear nuevo usuario
    nuevo_usuario = Usuario(
        nombre=data['nombre'],
        apellidos=data['apellidos'],
        email=email_normalizado,  # Guardar en minúsculas
        password=codificar_password,
        telefono=data.get('telefono'),
        orientacion=data.get('orientacion'),
        genero=data.get('genero'),
        biografia=data.get('biografia'),
        rolPerfil=data.get('rolPerfil', RolUsuarioEnum.usuario.value),
        carnet_conducir_verificado=data.get('carnet_conducir_verificado', False),
        numero_carnet_conducir=data.get('numero_carnet_conducir'),
        fecha_nacimiento=datetime.strptime(data['fecha_nacimiento'], '%Y-%m-%d') if data.get('fecha_nacimiento') else None,
        fecha_vencimiento_carnet=datetime.strptime(data['fecha_vencimiento_carnet'], '%Y-%m-%d') if data.get('fecha_vencimiento_carnet') else None
    )

    db.session.add(nuevo_usuario)
    db.session.commit()

    # Crear monedero para el usuario
    nuevo_usuario.monedero = Monedero()
    db.session.commit()

    # Generar token de acceso
    access_token = create_access_token(identity=nuevo_usuario.id)

    return jsonify({
        "mensaje": "Nuevo usuario creado correctamente",
        "access_token": access_token,
        "usuario": nuevo_usuario.serialize()
    }), 201


# Función para comprobar si el correo electrónico ya existe en el proceso de registro
@user_blueprint.route('/verificar-email-existente', methods=['GET'])
def verificar_email_existente():
    email = request.args.get('email')
    if not email:
        return jsonify({"Error": "Parámetro no encontrado"}), 400
    email_normalizado = email.lower()
    existe = Usuario.query.filter(Usuario.email.ilike(email_normalizado)).first() is not None
    return jsonify ({"existe": existe}), 200

# Función para comprobar si el teléfono ya existe en el proceso de registro
@user_blueprint.route('/verificar-telefono-existente', methods=['GET'])
def verificar_telefono_existente():
    telefono = request.args.get('telefono')
    if not telefono:
        return jsonify({"Error": "Parámetro no encontrado"}), 400
    existe = Usuario.query.filter_by(telefono=telefono).first() is not None
    return jsonify ({"existe": existe}), 200


# # # # # # # # # # # # # # # # # # # #
#              LOGIN
# # # # # # # # # # # # # # # # # # # #
@user_blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Buscar al usuario en la base de datos
    usuario = Usuario.query.filter_by(email=email).first()
  

    if usuario is None:
        return jsonify({'Error': "No se ha encontrado el correo"}), 404

    # Verificar si la contraseña coincide
    if not check_password_hash(usuario.password, password):
        return jsonify({'Error': 'Contraseña incorrecta'}), 401

    # Crear el token de acceso
    access_token = create_access_token(identity=usuario.id)

    return jsonify({
        'usuario': usuario.serialize(),
        'access_token': access_token
    }), 200

# # # # # # # # # # # # # # # # # # # #
#       OBTENER TODOS LOS USUARIOS
# # # # # # # # # # # # # # # # # # # #
@user_blueprint.route('/obtener_usuarios', methods=['GET'])
def obtener_usuarios():
    lista_usuarios = Usuario.query.options(
        joinedload(Usuario.vehiculos),
        joinedload(Usuario.monedero),
        joinedload(Usuario.puntuaciones)
    ).all()
    return jsonify([usuario.serialize() for usuario in lista_usuarios])



# # # # # # # # # # # # # # # # # # # #
#       OBTENER USUARIO POR ID
# # # # # # # # # # # # # # # # # # # #
@user_blueprint.route('/obtener_usuario_por_id/<int:id>', methods=['GET'])
def obtener_usuario_por_id(id):
    usuario = Usuario.query.get(id)
    if usuario is None:
        return jsonify({"error": "no se ha encontrado al usuario"}), 404

    return jsonify(usuario.serialize()), 200



@user_blueprint.route('/editarusuario/<int:user_id>', methods=['PUT'])
def actualizar_usuario(user_id):
    usuario = Usuario.query.get_or_404(user_id)
    data = request.json
    print('Data recibida: ', data)

    for key in ['nombre', 'apellidos', 'pronombre', 'genero', 'orientacion', 'biografia', 'fecha_nacimiento', 'preferencias', 'email', 'telefono', 'comunic_comerciales', 'comunic_terceros']:
        if key in data and data[key] is not None:  
            if key == 'fecha_nacimiento' and data[key]:
                setattr(usuario, key, datetime.strptime(data[key], '%Y-%m-%d'))  
            else:
                setattr(usuario, key, data[key])  
    
    db.session.commit()  
    return jsonify(usuario.serialize()), 200 


# # # # # # # # # # # # # # # # # # # #
#       ELIMINAR USUARIO POR ID
# # # # # # # # # # # # # # # # # # # #
@user_blueprint.route('/eliminar_usuario/<int:id>', methods=['DELETE'])
def eliminar_usuario(id):
    print('id ', id)
    usuario = Usuario.query.get(id)
    print('usuario: ', usuario)
    
    if usuario is None:
        return jsonify({"error": "No se ha encontrado al usuario"}), 404
    
    # Eliminar el usuario
    db.session.delete(usuario)
    db.session.commit()
    
    return jsonify({"mensaje": "Usuario eliminado correctamente"}), 200



def obtener_public_id(url):
    """ Extrae el public_id desde la URL de la imagen en Cloudinary. """
    match = re.search(r'/([^/]+)\.[a-zA-Z]+$', url)
    if match:
        return match.group(1)
    return None

# # # # # # # # # # # # # # # # # # # # # # # # # # #
#   Función para reducir el tamaño de una imagen.
# # # # # # # # # # # # # # # # # # # # # # # # # # #
def reducir_imagen(imagen, max_size=10485760):  # 10 MB
    img = Image.open(imagen)
    output = BytesIO()
    calidad = 85

    # Reducir el tamaño de la imagen (opcional, puedes ajustar el tamaño máximo)
    max_resolution = (1920, 1080)  # Puedes ajustar el tamaño máximo de la resolución
    img.thumbnail(max_resolution)

    # Obtener el formato original de la imagen
    formato = img.format.lower()

    # Comprimir según el formato
    while True:
        output.seek(0)
        
        if formato in ['jpeg', 'jpg']:  # JPEG
            img.save(output, format="JPEG", quality=calidad, optimize=True)
        elif formato == 'png':  # PNG
            img.save(output, format="PNG", optimize=True)
        elif formato == 'gif':  # GIF
            img.save(output, format="GIF", optimize=True)
        else:  # Otros formatos
            img.save(output, format=formato, quality=calidad, optimize=True)

        if output.tell() <= max_size or calidad <= 10:
            break
        
        # Reducir la calidad más rápido al principio para acelerar la compresión
        if calidad > 50:
            calidad -= 10
        else:
            calidad -= 5

    output.seek(0)
    return output



# # # # # # # # # # # # # # # # # # # # 
#       ACTUALIZAR IMAGEN DE PERFIL
# # # # # # # # # # # # # # # # # # # # 
@user_blueprint.route('/actualizar_imagen_perfil/<int:user_id>', methods=['PUT'])
def actualizar_imagen_perfil(user_id):
    user = Usuario.query.get_or_404(user_id)

    imagen = request.files.get('imagenPerfil')
    if not imagen:
        return jsonify({"error": "No se ha enviado ninguna imagen."}), 400

    if user.fotoPublicId:
        uploader.destroy(user.fotoPublicId)

    imagen = reducir_imagen(imagen) 
  
    carpeta_usuario = f"user_{user_id}"
    result = uploader.upload(imagen, folder=carpeta_usuario)

    user.fotoPerfil = result['secure_url']
    user.fotoPublicId = result['public_id']
    db.session.commit()

    return jsonify({"mensaje": "Imagen de perfil actualizada correctamente", "url": result['secure_url']}), 200


# # # # # # # # # # # # # # # # # # # # 
#       ELIMINAR IMAGEN DE PERFIL
# # # # # # # # # # # # # # # # # # # # 
@user_blueprint.route('/eliminar_imagen_perfil/<int:user_id>', methods=['DELETE'])
def eliminar_imagen_perfil(user_id):
    user = Usuario.query.get_or_404(user_id)

    if not user.fotoPublicId:
        return jsonify({"error": "El usuario no tiene una imagen de perfil."}), 404
    
    try:
        uploader.destroy(user.fotoPublicId)

        user.fotoPerfil = None
        user.fotoPublicId = None
        db.session.commit()

        return jsonify({"mensaje": "Imagen de perfil eliminada correctamente."}), 200
    except Exception as e:
        print("Error al eliminar la imagen:", e)
        return jsonify({"error": "No se pudo eliminar la imagen."}), 500


# # # # # # # # # # # # # # # # # # # # 
#       ACTUALIZAR IMAGEN DE CABECERA
# # # # # # # # # # # # # # # # # # # # 
@user_blueprint.route('/actualizar_imagen_cabecera/<int:user_id>', methods=['PUT'])
def actualizar_imagen_cabecera(user_id):
    user = Usuario.query.get_or_404(user_id)

    imagen = request.files.get('imagenCabecera')
    if not imagen:
        return jsonify({"error": "No se ha enviado ninguna imagen."}), 400

    # Eliminar imagen anterior si existe
    if user.fotoCabecera:
        public_id = obtener_public_id(user.fotoCabecera)
        if public_id:
            uploader.destroy(public_id)

    # Subir la nueva imagen a Cloudinary
    carpeta_usuario = f"user_{user_id}"
    result = uploader.upload(imagen, folder=carpeta_usuario)

    # Actualizar la información en la base de datos
    user.fotoCabecera = result['secure_url']
    db.session.commit()

    return jsonify({"mensaje": "Imagen de cabecera actualizada correctamente", "url": result['secure_url']}), 200



# # # # # # # # # # # # # # # # # # # # # # # # # # # #
#    FOTOS DE DOCUMENTOS DNI / CARNET DE CONDUCIR     #
# # # # # # # # # # # # # # # # # # # # # # # # # # # #

# Función para que el usuario suba la foto DELANTERA del documento de IDENTIDAD
@user_blueprint.route('/subirfoto_documentodelantera/<int:user_id>', methods=['PUT'])
def subirfoto_documentodelantera(user_id):
    user = Usuario.query.get_or_404(user_id)

    imagen = request.files.get('fotoDocumentoDelantera')
    if not imagen:
        return jsonify({"error": "No se ha enviado ninguna imagen."}), 400
    
    if user.fotoDocumentoDelantera:
        public_id =  obtener_public_id(user.fotoDocumentoDelantera)
        if public_id:
            uploader.destroy(public_id)
    
    imagen = reducir_imagen(imagen)

    carpeta_usuario = f"user_{user_id}"
    result = uploader.upload(imagen, folder=carpeta_usuario)

    user.fotoDocumentoDelantera = result['secure_url']
    db.session.commit()

    return jsonify({"mensaje": "Imagen de documento delantera actualizada correctamente", "url": result['secure_url']}), 200


# Función para que el usuario suba la foto TRASERA del documento de IDENTIDAD
@user_blueprint.route('/subirfoto_documentotrasera/<int:user_id>', methods=['PUT'])
def subirfoto_documentotrasera(user_id):
    user = Usuario.query.get_or_404(user_id)
    imagen = request.files.get('fotoDocumentoTrasera')
    if not imagen:
        return jsonify({"error": "No se ha enviado ninguna imagen."}), 400
    
    if user.fotoDocumentoTrasera:
        public_id =  obtener_public_id(user.fotoDocumentoTrasera)
        if public_id:
            uploader.destroy(public_id)
    
    imagen = reducir_imagen(imagen)

    carpeta_usuario = f"user_{user_id}"
    result = uploader.upload(imagen, folder=carpeta_usuario)

    user.fotoDocumentoTrasera = result['secure_url']
    db.session.commit()

    return jsonify({"mensaje": "Imagen de documento trasera actualizada correctamente", "url": result['secure_url']}), 200


# Función para que el usuario suba la foto DELANTERA del carnet de conducir
@user_blueprint.route('/subirfoto_carnetdelantera/<int:user_id>', methods=['PUT'])
def subirfoto_carnetdelantera(user_id):
    user = Usuario.query.get_or_404(user_id)
    imagen = request.files.get('fotoCarnetCondDelantera')
    if not imagen:
        return jsonify({"error": "No se ha enviado ninguna imagen."}), 400
    
    if user.fotoCarnetCondDelantera:
        public_id =  obtener_public_id(user.fotoCarnetCondDelantera)
        if public_id:
            uploader.destroy(public_id)
    
    imagen = reducir_imagen(imagen)

    carpeta_usuario = f"user_{user_id}"
    result = uploader.upload(imagen, folder=carpeta_usuario)

    user.fotoCarnetCondDelantera = result['secure_url']
    db.session.commit()

    return jsonify({"mensaje": "Imagen de carnet delantera actualizada correctamente", "url": result['secure_url']}), 200

# Función para que el usuario suba la foto TRASERA del carnet de conducir
@user_blueprint.route('/subirfoto_carnettrasera/<int:user_id>', methods=['PUT'])
def subirfoto_carnettrasera(user_id):
    user = Usuario.query.get_or_404(user_id)
    imagen = request.files.get('fotoCarnetCondTrasera')
    if not imagen:
        return jsonify({"error": "No se ha enviado ninguna imagen."}), 400
    
    if user.fotoCarnetCondTrasera:
        public_id =  obtener_public_id(user.fotoCarnetCondTrasera)
        if public_id:
            uploader.destroy(public_id)
    
    imagen = reducir_imagen(imagen)

    carpeta_usuario = f"user_{user_id}"
    result = uploader.upload(imagen, folder=carpeta_usuario)

    user.fotoCarnetCondTrasera = result['secure_url']
    db.session.commit()

    return jsonify({"mensaje": "Imagen de carnet delantera actualizada correctamente", "url": result['secure_url']}), 200


#Función para enviar sms al teléfono del usuario.
@user_blueprint.route('/enviar_sms', methods=['POST'])
def enviar_sms():
    data = request.get_json()
    telefonoAVerificar = data.get('telefono')

    if not telefonoAVerificar:
        return jsonify({'success': False, 'message': 'Teléfono no proporcionado'}), 400

    try:
        # 1. Crear verificación con Prelude (ellos envían el código)
        verification = client.verify.v2.services(SERVICE_SID).verifications.create(
            to=telefonoAVerificar,
            channel="sms"
        )

        # 2. Devolver el ID de la verificación (hay que guardarlo en BD/session)
        return jsonify({
            "success": True,
            "message": "Código de verificación enviado correctamente",
            "verification_sid": verification.sid
        })

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


#Función para verificar el documento del usuario.
@user_blueprint.route('/verificar_documento/<int:user_id>', methods=['POST'])
def verificar_documento(user_id):
    user = Usuario.query.get_or_404(user_id)
    data = request.get_json()
    documento = data.get('numero_documento')

    if not documento:
        return jsonify({'success': False, 'message': 'Falta el documento'}), 400
    
    try:
        user.numero_documento = documento
        user.dni_verificado = True
        db.session.commit()
        return jsonify({'status': True, "mensaje": "Documento guardado correctamente"}), 200
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

    

#Endpoint para verificar el código
@user_blueprint.route('/verificar_codigo', methods=['POST'])
def verificar_codigo():
    data = request.get_json()
    phone_number = data.get('phone_number')
    codigo = data.get('codigo')

    if not phone_number  or not codigo:
        return jsonify({'success': False, 'message': 'Datos incompletos'}), 400

    try:
        telefono_formateado = "+34" + str(phone_number)
        result = client.verify.v2.services(SERVICE_SID).verification_checks.create(
            to=telefono_formateado,
            code=codigo
        )
        print('Resultado: ', result)
        print('Phone number: ', phone_number)
        if result.status == "approved":
            usuario = Usuario.query.filter_by(telefono=phone_number).first()
            if usuario:
                usuario.telefonoVerificado = True
                db.session.commit()
                db.session.refresh(usuario)
            
            return jsonify({"success": True, "message": "Teléfono verificado ✅"}), 200
        else:
            return jsonify({"success": False, "message": "Código incorrecto ❌"}), 400

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500




# # # # # # # # # # # # # # # # # # # # 
#      ENVIO Y VERIFICACIÓN DE EMAIL
# # # # # # # # # # # # # # # # # # # # 

#Función backend para envíar el correo de verificación del correo
@user_blueprint.route('/enviar_email', methods=['POST'])
def enviar_email():
    email = request.json['email']
    salt = 'email-verify'
    token = serializer.dumps(email, salt=salt)
    print('Token generado: ', token)
    link= f"http://localhost:4200/verificaciones-perfil?token={token}"
    msg = Message("Verifica tu correo", recipients=[email])
    msg.body = f"Por favor haz click en el siguiente en lace para verificar tu correo: {link}"
    mail.send(msg)

    return jsonify({'message': 'Correo enviado'}), 200

@user_blueprint.route('/enviar_email_resetpassword', methods=['POST'])
def enviar_email_reset_password():
    email = request.json['email']
    salt = 'password-reset'
    token = serializer.dumps(email, salt=salt)
    link= f"http://localhost:4200/nueva-contrasena/{token}"
    msg = Message("Reseteo de contraseña PrideRide", recipients=[email])
    msg.html = render_template('email_reset_password.html', link=link)
    mail.send(msg)
    # msg.body = f"""Hola,
    #  Has solicitado un reseteo de tu contraseña para acceder a PrideRide
      
    # Pulsa en el siguiente enlace para poder hacer el cambio. Sólo es válido durante media hora por seguridad:

    # {link}

    # Si no has solicitado ningún cambio de contraseña, puedes ignorar este correo. 

    # Saludo,

    # El equipo de PrideRide."""
    # mail.send(msg)

    return jsonify({'message': 'Correo enviado'}), 200

#Función backend para verificar el correo desde la pantalla de verificaciones-perfil
@user_blueprint.route('/verificar_email', methods=['POST'])
def verificar_email():
    token = request.json['token']
    salt = 'email-verify'
    try:

        email = serializer.loads(token, salt=salt, max_age=1800)
        print(f"Email extraído del token: {email}") 
        usuario = Usuario.query.filter_by(email=email).first()
        if usuario:
            usuario.emailVerificado = True
            db.session.commit()
            return jsonify({'message': 'Correo verificado correctamente'}), 200
        else:
            return jsonify({'error': 'Usuario no encontrado'}), 404

    except Exception as e:
        print(f"Error al verificar token: {e}")
        return jsonify({'error': 'Token invalido o expirado'}), 400

#Función backend para cambiar la contraseña con el correo de reestablecimiento:
@user_blueprint.route('/restablecerpassword', methods=['POST'])
def restablacerpassword():
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


#Función para comprobar el estado de vida del token
@user_blueprint.route('/comprobacion_token', methods= ['GET'])
def comprobacion_token():
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
    





    

# #Verificar si la contraseña actual es la correcta
@user_blueprint.route('/comprobarpwactual', methods=['POST'])
def comprobarpwactual():
    id = request.json.get('id')
    password = request.json.get('password')
    print(f"id: {id}")
    print(f"Password ingresada: {password}")

    usuario = Usuario.query.filter_by(id=id).first()

    if usuario is None:
        return jsonify({'error:': 'usuario no encontrado'}), 404
    print (f"Hash de contraseña almacenada: {usuario.password}")

    if check_password_hash(usuario.password, password):
        return jsonify({'isValid': True}), 200
    else:
        return jsonify({'isValid': False}), 401
    

# Cambio de contraseña desde la ventana de ajustes
@user_blueprint.route('/cambiopassword/<int:id>', methods=['PUT'])
def cambiopassword(id):
    usuario = Usuario.query.get(id)
    if usuario is None:
        return jsonify({'error': 'usuario no encontrado'})
    
    data = request.json
    nueva_password = data.get('password')

    if not nueva_password:
        return jsonify({'La nueva password es requerida'}), 400
    
    nueva_password_hash = generate_password_hash(nueva_password)
    usuario.password = nueva_password_hash

    db.session.commit()

    return jsonify({'mensaje': 'nueva contraseña actualizada con éxito'}), 200


#########  MONEDERO DEL USUARIO #########


# # # # # # # # # # # # # # # # # # # # 
#      OBTENER EL MONEDERO DEL USUARIO
# # # # # # # # # # # # # # # # # # # # 
@user_blueprint.route('/obtener_datos_monedero/<int:usuario_id>', methods=['GET'])
def obtener_monedero(usuario_id):
    monedero = Monedero.query.filter_by(usuario_id=usuario_id).first()
    if not monedero:
        return jsonify({"error": "Monedero del usuario no encontrado"}), 404
    return jsonify(monedero.serialize()), 200


# # # # # # # # # # # # # # # # # # # # 
#      RECARGAR EL MONEDERO DEL USUARIO
# # # # # # # # # # # # # # # # # # # # 
@user_blueprint.route('/recargar', methods=['POST'])
def recargar_saldo():
    data = request.json
    usuario_id = data.get('usuario_id')
    cantidad = data.get('cantidad')
    concepto = data.get('concepto', 'Recarga manual')

    if not usuario_id or cantidad is None:
        return jsonify({"error": "Datos insuficientes"}), 400

    monedero = Monedero.query.filter_by(usuario_id=usuario_id).first()
    if not monedero:
        return jsonify({"error": "Monedero no encontrado"}), 404

    # Sumar saldo
    monedero.saldo += cantidad
    db.session.add(monedero)

    # Registrar movimiento
    movimiento = MovimientoMonedero(
        usuario_id=usuario_id,
        cantidad=cantidad,
        tipo='recarga',
        concepto=concepto,
        fecha=datetime.utcnow()
    )
    db.session.add(movimiento)
    db.session.commit()

    return jsonify(monedero.serialize()), 200


# # # # # # # # # # # # # # # # # # # # 
#      PAGAR CON EL MONEDERO DEL USUARIO
# # # # # # # # # # # # # # # # # # # # 
@user_blueprint.route('/pagar', methods=['POST'])
def pagar():
    data = request.json
    usuario_id = data.get('usuario_id')
    cantidad = data.get('cantidad')
    concepto = data.get('concepto', 'Pago')

    if not usuario_id or cantidad is None:
        return jsonify({"error": "Datos insuficientes"}), 400

    monedero = Monedero.query.filter_by(usuario_id=usuario_id).first()
    if not monedero:
        return jsonify({"error": "Monedero no encontrado"}), 404

    if monedero.saldo < cantidad:
        return jsonify({"error": "Saldo insuficiente"}), 400

    # Restar saldo
    monedero.saldo -= cantidad
    db.session.add(monedero)

    # Registrar movimiento
    movimiento = MovimientoMonedero(
        usuario_id=usuario_id,
        cantidad=-cantidad, 
        tipo='pago',
        concepto=concepto,
        fecha=datetime.utcnow()
    )
    db.session.add(movimiento)
    db.session.commit()

    return jsonify(monedero.serialize()), 200


# # # # # # # # # # # # # # # # # # # # 
#     OBTENER MOVIMIENTOS DEL MONEDERO DEL USUARIO
# # # # # # # # # # # # # # # # # # # # 
@user_blueprint.route('/movimientos/<int:usuario_id>', methods=['GET'])
def obtener_movimientos(usuario_id):
    movimientos = MovimientoMonedero.query.filter_by(usuario_id=usuario_id).order_by(MovimientoMonedero.fecha.desc()).all()
    lista = [m.serialize() for m in movimientos]
    return jsonify(lista), 200