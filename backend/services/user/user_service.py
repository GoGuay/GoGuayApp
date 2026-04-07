
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
from datetime import datetime, timezone

# Nombre único para evitar conflictos
user_blueprint = Blueprint('user', __name__)

mail = None
serializer = None



##Configuración Twilio
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
SERVICE_SID = os.getenv("TWILIO_SERVICE_SID")

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

otp_store = {}


## --- RUTAS DE USUARIO --- ##

## CREAR NUEVO USUARIO ##
@user_blueprint.route('/registro', methods=['POST'])
def crear_usuario():
    """
    1. Recibe los datos del json y los guarda en data. Verificar que tenga 4 datos esenciales: nombre, apellidos, email y password.
    un usuario con ese correo lanza error.
    2. Convierte el correo a minúsculas (lower) para evitar que se registren dos correos y con el ilike realiza una busqueda en bd ignorando mayúsculas/minúsculas. Si encuentra
    3. Se hashea la contraseña para que la contraseña sea segura.
    4. Se mapea los campos del json, pasando cada dato que llega del json al modelo creado para el usuario. Con el get nos aseguramos que el registro siga aunque no tenga dato en ese campo.
    5. add y commit --> guarda al usuario para que el sistema le asigne un ID. Se le crea un monedero a ese usuario creado y se guarda de nuevo.
    6. Genera token de acceso: el servidor crea el usuario y genera el token con su ID, se envia ese token al frontend. Cada vez que el usuario pida algo al servidor, envia ese token.
    7. El servidor recibe el token, lo codifica y comprueba la identity, sabe quien está haciendo la petición sin preguntar la contraseña.
    """
    data = request.json

    campos_obligatorios = ['nombre', 'apellidos', 'email', 'password']
    for campo in campos_obligatorios:
        if campo not in data:
            return jsonify({"error": f"Falta el campo obligatorio: {campo}"}), 400

    email_normalizado = data['email'].lower()

    if Usuario.query.filter(Usuario.email.ilike(email_normalizado)).first():
        return jsonify({"error": "El correo electrónico ya existe"}), 400

    codificar_password = generate_password_hash(data['password'])

    nuevo_usuario = Usuario(
        nombre=data['nombre'],
        apellidos=data['apellidos'],
        email=email_normalizado,
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

    nuevo_usuario.monedero = Monedero()
    db.session.commit()

    access_token = create_access_token(identity=nuevo_usuario.id)

    salt = 'email-verify'
    token = serializer.dumps(nuevo_usuario.email, salt=salt)
    link_verificacion = f"http://localhost:4200/verificar-email/{token}"
    msg = Message("Bienvenidx a PrideRide", recipients=[nuevo_usuario.email])
    msg.html = render_template('correo_bienvenida.html', link=link_verificacion)
    mail.send(msg)
    nuevo_usuario.id
    return jsonify({
        "mensaje": "Nuevo usuario creado correctamente",
        "access_token": access_token,
        "usuario": nuevo_usuario.serialize()
    }), 201


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
    return jsonify ({"Ya existe correo": existe}), 200


## COMPOBAR SI YA EXISTE UN TELÉFONO DURANTE EL REGISTRO ##
@user_blueprint.route('/verificar-telefono-existente', methods=['GET'])
def verificar_telefono_existente():
    """Verifica si el teléfono ya existe en la base de datos durante un nuevo proceso de registro."""
    telefono = request.args.get('telefono')
    if not telefono:
        return jsonify({"Error": "Teléfono no encontrado"}), 400
    existe = Usuario.query.filter_by(telefono=telefono).first() is not None
    return jsonify ({"Ya existe teléfono": existe}), 200


## LOGIN DEL USUARIO AL SISTEMA ##
@user_blueprint.route('/login', methods=['POST'])
def login():
    """
    1. Obtiene lo datos del json y los guarda en data. De esta data extrae el email y el password.
    2. Busca al usuario en la tabla Usuarios de la base de datos. Hace la consulta con query. Filtra el email de la izquierda (bd) con el de la derecha (lo que escribió el usuario). First nos devuelve el primer resultado que encuentre.
    3. Si el usuario no existe se detiene el proceso.
    4. check_password_hash: Toma la contrasñe que el usuario escribió y la compara matemáticamente con el código cifrado que hay guardados. Si no coinciden, devuelve error 401.
    5. Si la contraseña coincide, crea el token. identity=usuario.id--> guarda el id unico del usuario dentro del token.
    """
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    usuario = Usuario.query.filter_by(email=email).first()  

    if usuario is None:
        return jsonify({'Error': "No se ha encontrado el correo"}), 404

    if not check_password_hash(usuario.password, password):
        return jsonify({'Error': 'Contraseña incorrecta'}), 401

    access_token = create_access_token(identity=usuario.id)

    return jsonify({
        'usuario': usuario.serialize(),
        'access_token': access_token
    }), 200


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
        joinedload(Usuario.monedero),
        joinedload(Usuario.puntuaciones)
    ).all()
    
    return jsonify([usuario.serialize() for usuario in lista_usuarios])


## OBTENER USUARIO POR ID ##
@user_blueprint.route('/obtener_usuario_por_id/<int:id>', methods=['GET'])
def obtener_usuario_por_id(id):
    """
    1. Realiza una peticion a la tabla Usuarios de la base de datos, buscando por el Id (que obtiene de manera dinámica por la ruta con <int:id>), y lo guarda en usuario.
    2. Si no encuentra al usuario, devuelve error. Si lo encuentra lo convierte en un diccionario python y lo envía en formato Json con toda la información serializada.
    """
    usuario = Usuario.query.get(id)
    if usuario is None:
        return jsonify({"error": "no se ha encontrado al usuario"}), 404

    return jsonify(usuario.serialize()), 200

## EDITAR INFORMACIÓN DE UN USUAURIO ##
@user_blueprint.route('/editarusuario/<int:user_id>', methods=['PUT'])
def actualizar_usuario(user_id):
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
    usuario = Usuario.query.get_or_404(user_id)
    data = request.json

    for key in ['nombre', 'apellidos', 'pronombre', 'genero', 'orientacion', 'biografia', 'fecha_nacimiento', 'preferencias', 'email', 'telefono', 'comunic_comerciales', 'comunic_terceros']:
        if key in data and data[key] is not None:  
            if key == 'fecha_nacimiento' and data[key]:
                setattr(usuario, key, datetime.strptime(data[key], '%Y-%m-%d'))  
            else:
                setattr(usuario, key, data[key])      
    
    db.session.commit()  
    return jsonify(usuario.serialize()), 200 

## ELIMINAR USUARIO POR ID ##
@user_blueprint.route('/eliminar_usuario/<int:id>', methods=['DELETE'])
def eliminar_usuario(id):
    """
    1. Con el metodo DELETE permite borrar.
    2. A través de la url le pasamos de manera dinámica el usuario y realizamos una consulta a la BD. Si el usuario no se encuentra, devuelve error y se detiene.
    3. Si encuentra al usuario hacemos el db.session.delete para borrarlo y guardamos los cambios con el commit.
    4. Devolvemos un mensaje en formato Json con la confirmación de eliminación.
    """
    usuario = Usuario.query.get(id)
    
    if usuario is None:
        return jsonify({"error": "No se ha encontrado al usuario"}), 404

    # Realiza el borrado físico y guarda cambios
    db.session.delete(usuario)
    db.session.commit()
    
    return jsonify({"mensaje": "Usuario eliminado correctamente"}), 200


## --- FUNCIONES DE APOYO (UTILIDADES) --- ##

## CLOUDINARY: EXTRAE EL PUBLIC_ID DE UNA URL ##
def obtener_public_id(url):
    """
    Limpia una url de Cloudinary y se queda solo con el nombre del archivo.
    1. re.search --> busca dentro de un texto un patrón específico
    2. (r'/(...)) --> Guarda todo lo que encuentres hasta que encuentres otra barra o punto.
    3. if --> si el patrón tiene éxito match.group(1) extrae unicamente lo que estaba dentro de los paréntesis ([^/]+)
    Ejemplo: url: https://res.cloudinary.com/demo/image/upload/sample_image.jpg // Lo que detecta: /sample_image.jpg // Lo que devuelve group1: sample_image
    """
    match = re.search(r'/([^/]+)\.[a-zA-Z]+$', url)
    if match:
        return match.group(1)
    return None


## REDUCIR EL TAMAÑO Y PESO FINAL DE UNA IMAGEN ##
def reducir_imagen(imagen, max_size=10485760):
    """
    1. Image.open --> abre la imagen usando la librería PIL
    2. BytesIO() --> crea un archivo virtual en la RAM en lugar de guardar la imagen en el disco duro mientras se procesa.
    3. img.thumbnail(max_resolution) --> Reduce las dimensiones (ancho x alto) sin deformar la imagen
    4. img.format.lower() --> detecta el formato de la imagen (jpg, png...)
    5. Bucle while:    
        -output.seek(0) --> Limpia el archivo virtual para intentar un nuevo guardado
        - img.save(...) --> guarda la imagen en el buffer con la calidad actual
        - output.tell() --> mide cuanto bytes pesa el archivo resultante en ese momento. EL blucle se detiene si el peso es menor o igual a X mb o la calidad ya bajó a X.
        - if calidad > 50 ... --> reduce gradualmente la calidad
    6. Finalmente hace un ultimo output.seek(0) para colocar el puntero del archivo al principio, es decir, quien recibe el objeto del output puede abrirlo desde el inicio, como si fuese un archivo recien abierto.
    """
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


## ACTUALIZAR IMAGEN DE PERFIL ##
@user_blueprint.route('/actualizar_imagen_perfil/<int:user_id>', methods=['PUT'])
def actualizar_imagen_perfil(user_id):
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


## ELIMINAR IMAGEN DE PERFIL ##
@user_blueprint.route('/eliminar_imagen_perfil/<int:user_id>', methods=['DELETE'])
def eliminar_imagen_perfil(user_id):
    """
    1. A través del ID dinámico del usuario, realiza una búsqueda de dicho usuario y detiene el proceso si no lo encuentra.
    2. Si el usuario no tiene foto de perfil, detiene el proceso.
    3. uploader.destroy --> método para destruir la imagen del perfil que tenga el usuario. A continuación pone los valores fotoPerfil y fotoPublicId a en nulos y guarda los cambios con el commit.
    4. Devuelve un mensaje de éxito en la función. Si el intento de eliminarla tiene algun fallo devuelve otro mensaje de error.
    """
    user = Usuario.query.get_or_404(user_id)

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
@user_blueprint.route('/actualizar_imagen_cabecera/<int:user_id>', methods=['PUT'])
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


## CLOUDINARY -- SUBIR FOTO DELANTERA DEL CARNET DE CONDUCIR ##
@user_blueprint.route('/subirfoto_carnetdelantera/<int:user_id>', methods=['PUT'])
def subirfoto_carnetdelantera(user_id):
    """
    1. A través del ID dinámico del usuario, realiza una búsqueda de dicho usuario (404 si no existe).
    2. Recoge el archivo que haya en fotoCarnetCondDelantera y lo guarda en imagen. Si no hay ninguna imagen, detiene la función.
    3. Si el usuario ya tiene una fotoCarnetCondDelantera, extrae su public_id de la URL y elimina el archivo anterior en Cloudinary.
    4. Aplica la función reducir_imagen si fuese necesario.
    5. Sube la nueva imagen a la carpeta específica del usuario (creándola si no existe).
    6. Actualiza la URL en la base de datos, guarda los cambios (commit) y retorna la nueva 'secure_url'.

    """
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


## ENVÍO DE SMS AL TFNO DEL USUARIO PARA VERIFICAR PERFIL ##
@user_blueprint.route('/enviar_sms', methods=['POST'])
def enviar_sms():
    """
    1. Obtiene el json desde el front y accede al campo 'teléfono' y le pasa el dato a 'telefonoAVerificar'.
    2. Si no hay teléfonoAVerificar, lanza un error y detiene la función.
    3. try: Se llama al servicio de Twilio para enviar el mensaje. Se le pasa a 'to' el numero y se elige 'sms' como canal. 
    4. Devolvemos un json con la respuesta y con el verification_sid (sólo es un id para identificar si el mensaje se ha enviado correctamente.)
    5. Si lo anterior da algun error, lo mostramos con el except. 
    """
    data = request.get_json()
    telefonoAVerificar = data.get('telefono')

    if not telefonoAVerificar:
        return jsonify({'success': False, 'message': 'Teléfono no proporcionado'}), 400

    try:
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


## COMPROBACIÓN DEL CÓDIGO ENVIADO POR SMS ##
@user_blueprint.route('/verificar_codigo', methods=['POST'])
def verificar_codigo():
    """
    1. Se accede al json enviado desde el front, se extrae el dato 'telefono' y el dato 'codigo'.
    2. Si no hay telefono devuelve error y detiene la función.
    3. Añade al número de teléfono el prefijo de España y lo convertimos a string por petición de la API, llama al servicio de Twilio (verification_checks_create) y le pasa el teléfono ya con el prefijo y el codigo. La respuesta de ese servicio se guarda en la variable 'result'.
    4. Si la respuesta es 'approved', busca en la BD de la tabla Usuarios por número de tfno, coge el primer resultado y si ademas si hay usuario pasa el atributo telefonoVerificado a True, guarda los cambios y con el refresh actualiza todo para obtener todos los datos del usuario actualizados. Si todo está correcto devuelve un json con un mensaje de OK, sino devuelve un mensaje de error. 
    5. Except: devuelve un mensaje si el proceso ha fallado. 
    """
    data = request.get_json()
    phone_number = data.get('telefono')
    codigo = data.get('codigo')

    if not phone_number  or not codigo:
        return jsonify({'success': False, 'message': 'Datos incompletos'}), 400

    try:
        telefono_formateado = "+34" + str(phone_number)
        result = client.verify.v2.services(SERVICE_SID).verification_checks.create(
            to=telefono_formateado,
            code=codigo
        )
        
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

## PONER COMO VERIFICADO EL CAMPO 'DOCUMENTO' CUANDO EL USUARIO INTRODUCE EL NÚMERO ##
@user_blueprint.route('/verificar_documento/<int:user_id>', methods=['POST'])
def verificar_documento(user_id):
    """
    1. Se busca al usuario en la BD por el Id. Si no lo encuentra se devuelve un error.
    2. Se recibe el json desde el front y se guarda en 'data'.
    3. Obtenemos el 'numero_documento' del json y se guarda en 'documento'.
    4. Si no hay documento, se devuelve un error y se detiene la función. 
    5. El documento recibido se guarda en el atributo numero_documento del user, y se actualiza el estado del atributo dni_verificado a True.
    6. Se guardan los cambios y se devuelve un mensaje de éxito.
    7. Si hay algún error durante el proceso, se devuelve un error. 
    """
    user = Usuario.query.get_or_404(user_id)
    data = request.get_json()
    documento = data.get('numero_documento')

    if not documento:
        return jsonify({'status': False, 'message': 'Falta el documento'}), 400
    
    try:
        user.numero_documento = documento
        user.dni_verificado = True
        db.session.commit()
        return jsonify({'status': True, "mensaje": "Documento guardado correctamente"}), 200
    except Exception as e:
        return jsonify({'status': False, 'message': str(e)}), 500

    
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
    link= f"http://localhost:4200/verificar-email/{token}"
    msg = Message("Verifica tu correo", recipients=[email])
    msg.body = f"Por favor haz click en el siguiente en lace para verificar tu correo: {link}"
    
    mail.send(msg)

    return jsonify({'message': 'Correo enviado'}), 200


## PONER COMO VERIFICADO EL CAMPO 'EMAIL' CUANDO EL USUARIO CLICA EN EL ENLACE RECIBIDO ##
@user_blueprint.route('/verificar_email', methods=['POST'])
def verificar_email():
    """
    Esta función recoge información que le llega desde el front con el token
    1. Recoge el 'token' desde el json y lo pasa a 'token'.
    2. Guarda en 'email' la configuración para verificar el token, comprueba que el salt sea de email-verify y comprueba cuando se ha enviado el email (comprueba la hora de envío y la resta de la hora actual.)
    3. Busca al usuario en la bd por email y obtiene el primero. Si encuentra usuario, pone su atributo emailVerificado en True y guarda los datos. Devuelve un mensaje de exito o error.
    4. except: Si el proceso ha fallado devuelve un mensaje de error. 
    """
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

# #Función backend para verificar el correo desde la pantalla de verificaciones-perfil
# @user_blueprint.route('/verificar_email', methods=['POST'])
# def verificar_email():
#     token = request.json['token']
#     salt = 'email-verify'
#     try:

#         email = serializer.loads(token, salt=salt, max_age=1800)
#         print(f"Email extraído del token: {email}") 
#         usuario = Usuario.query.filter_by(email=email).first()
#         if usuario:
#             usuario.emailVerificado = True
#             db.session.commit()
#             return jsonify({'message': 'Correo verificado correctamente'}), 200
#         else:
#             return jsonify({'error': 'Usuario no encontrado'}), 404

#     except Exception as e:
#         print(f"Error al verificar token: {e}")
#         return jsonify({'error': 'Token invalido o expirado'}), 400

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
    id = request.json.get('id')
    password = request.json.get('password')
    # print(f"id: {id}")
    # print(f"Password ingresada: {password}")

    usuario = Usuario.query.filter_by(id=id).first()

    if usuario is None:
        return jsonify({'error:': 'usuario no encontrado'}), 404
    
    print (f"Hash de contraseña almacenada: {usuario.password}")

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


#########  MONEDERO DEL USUARIO #########



## OBTENER EL MONEDERO DEL USUARIO ##
@user_blueprint.route('/obtener_datos_monedero/<int:usuario_id>', methods=['GET'])
def obtener_monedero(usuario_id):
    """
    1. De la tabla Monedero, filtra por el id del usuario y guarda el primer resultado que encuentra en 'monedero'. Si no lo encuentra, devuelve error y sale de la función.
    2. serialize: convierte el objeto de la base de datos en un diccionario python para poder enviar datos. 
    """
    monedero = Monedero.query.filter_by(usuario_id=usuario_id).first()
    if not monedero:
        return jsonify({"error": "Monedero del usuario no encontrado"}), 404
    return jsonify(monedero.serialize()), 200



## RECARGAR EL MONEDERO DEL USUARIO ##
@user_blueprint.route('/recargar', methods=['POST'])
def recargar_saldo():
    """
    1. Del json, obtiene el usuario_id, la cantidad y el concepto (si no se ha guardado concepto, asigna "recarga manual") y lo guarda en sus correspondientes campos. Si no hay usuario o cantidad devuelve error y sale de la función. 
    2. En la tabla monedero busca por el id del usuario, obtiene el primer resultado de la busqueda y lo guarda en monedero. Si no hay, devuelve error y sale. 
    3. Toma el saldo que tenía el monedero y le suma la nueva cantidad. Con db.session.add indica que la información del monedero ha cambiado. 
    4. En la tabla MovimientoMonedero anota quien recargó, cuanto recargó, el tipo de recarga y la fecha con hora de la recarga. 
    5. Guarda los datos con el commit.
    """
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

    # Registrar movimiento en el historial del monedero
    movimiento = MovimientoMonedero(
        usuario_id=usuario_id,
        cantidad=cantidad,
        tipo='recarga',
        concepto=concepto,
        fecha=datetime.now(timezone.utc)
    )
    db.session.add(movimiento)
    db.session.commit()

    return jsonify(monedero.serialize()), 200


# #PAGAR CON EL MONEDERO DEL USUARIO ##
@user_blueprint.route('/pagar', methods=['POST'])
def pagar():
    """
    1. De la data obtiene el id del usuario, la cantidad y el concepto (si no hay concepto, asigna el concepto 'pago'). Si no hay usuario_id o cantidad devuelve error y sale.
    2. En la tabla monedero busca por el id del usuario, obtiene el primer resultado de la busqueda y lo guarda en monedero. Si no hay, devuelve error y sale. 
    3. Si el saldo que tiene el monedero es < que la cantidad a pagar, da error y se detiene la función.
    4. Al saldo que tiene el monedero, le restamos la cantidad y actualizamos el monedero. 
    5. En la tabla MovimientoMonedero anota quien recargó, cuanto recargó, el tipo de recarga y la fecha con hora de la recarga. 
    6. Guardamos los datos del monedero. 
    """
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
        fecha=datetime.now(timezone.utc)
    )
    db.session.add(movimiento)
    db.session.commit()

    return jsonify(monedero.serialize()), 200



## OBTENER MOVIMIENTOS DEL MONEDERO DEL USUARIO ##
@user_blueprint.route('/movimientos/<int:usuario_id>', methods=['GET'])
def obtener_movimientos(usuario_id):
    """
    1. EN la tabla MovimientoMonedero busca por id los registros de un usuario. Con el ordey_by los ordena de forma descendente (aparece primero el mas reciente). Con el .all mostramos toda la lista de movimientos.
    2. Recorre cada movimiento encontrado, lo convierte a formato Json y lo guarda en una lista nueva. 
    """
    movimientos = MovimientoMonedero.query.filter_by(usuario_id=usuario_id).order_by(MovimientoMonedero.fecha.desc()).all()
    lista = [m.serialize() for m in movimientos]
    return jsonify(lista), 200







# # # # # # # # # # # # # # # # # # # # # # # # # # # #
#               FOTOS DE DOCUMENTOS DNI               #
# # # # # # # # # # # # # # # # # # # # # # # # # # # #

# Función para que el usuario suba la foto DELANTERA del documento de IDENTIDAD
# @user_blueprint.route('/subirfoto_documentodelantera/<int:user_id>', methods=['PUT'])
# def subirfoto_documentodelantera(user_id):
#     user = Usuario.query.get_or_404(user_id)

#     imagen = request.files.get('fotoDocumentoDelantera')
#     if not imagen:
#         return jsonify({"error": "No se ha enviado ninguna imagen."}), 400
    
#     if user.fotoDocumentoDelantera:
#         public_id =  obtener_public_id(user.fotoDocumentoDelantera)
#         if public_id:
#             uploader.destroy(public_id)
    
#     imagen = reducir_imagen(imagen)

#     carpeta_usuario = f"user_{user_id}"
#     result = uploader.upload(imagen, folder=carpeta_usuario)

#     user.fotoDocumentoDelantera = result['secure_url']
#     db.session.commit()

#     return jsonify({"mensaje": "Imagen de documento delantera actualizada correctamente", "url": result['secure_url']}), 200


# Función para que el usuario suba la foto TRASERA del documento de IDENTIDAD
# @user_blueprint.route('/subirfoto_documentotrasera/<int:user_id>', methods=['PUT'])
# def subirfoto_documentotrasera(user_id):
#     user = Usuario.query.get_or_404(user_id)
#     imagen = request.files.get('fotoDocumentoTrasera')
#     if not imagen:
#         return jsonify({"error": "No se ha enviado ninguna imagen."}), 400
    
#     if user.fotoDocumentoTrasera:
#         public_id =  obtener_public_id(user.fotoDocumentoTrasera)
#         if public_id:
#             uploader.destroy(public_id)
    
#     imagen = reducir_imagen(imagen)

#     carpeta_usuario = f"user_{user_id}"
#     result = uploader.upload(imagen, folder=carpeta_usuario)

#     user.fotoDocumentoTrasera = result['secure_url']
#     db.session.commit()

#     return jsonify({"mensaje": "Imagen de documento trasera actualizada correctamente", "url": result['secure_url']}), 200



# Función para que el usuario suba la foto TRASERA del carnet de conducir
# @user_blueprint.route('/subirfoto_carnettrasera/<int:user_id>', methods=['PUT'])
# def subirfoto_carnettrasera(user_id):
#     user = Usuario.query.get_or_404(user_id)
#     imagen = request.files.get('fotoCarnetCondTrasera')
#     if not imagen:
#         return jsonify({"error": "No se ha enviado ninguna imagen."}), 400
    
#     if user.fotoCarnetCondTrasera:
#         public_id =  obtener_public_id(user.fotoCarnetCondTrasera)
#         if public_id:
#             uploader.destroy(public_id)
    
#     imagen = reducir_imagen(imagen)

#     carpeta_usuario = f"user_{user_id}"
#     result = uploader.upload(imagen, folder=carpeta_usuario)

#     user.fotoCarnetCondTrasera = result['secure_url']
#     db.session.commit()

#     return jsonify({"mensaje": "Imagen de carnet delantera actualizada correctamente", "url": result['secure_url']}), 200