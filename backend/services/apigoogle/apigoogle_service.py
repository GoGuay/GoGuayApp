# # # # # # # # # # # # # # # # # # # # # # # # # # # # 
#  SERVICIO DEDICADO PARA LA INFORMACIÓN DEL USUARIO  #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # 

from flask import Blueprint, jsonify, Response,  request
import requests
import os
from dotenv import load_dotenv
from google.cloud import translate
import re







# Nombre único para evitar conflictos
apigoogle_blueprint = Blueprint('apigoogle', __name__)

# Cargar el archivo .env
load_dotenv()

# Acceder a la variable de entorno 'GOOGLE_API_KEY'
googleapykey=os.getenv('GOOGLE_API_KEY')


#Busca una localidad según los caracteres que introduzca el usuario
@apigoogle_blueprint.route('/buscar_localidad', methods=['GET'])
def buscar_localidad():
    query = request.args.get('q', '')

    patron_letras = r'^[a-zA-ZáéíóúÁÉÍÓÚñÑ]'
    if len(query) < 3 or not re.match(patron_letras, query):
        return jsonify([]), 200

    url_autocomplete = 'https://places.googleapis.com/v1/places:autocomplete'   
    payload_autocomplete = {
        "input": query,
        "languageCode": "es",
        "includedRegionCodes": ["es"],
        "includedPrimaryTypes": ["(cities)"]
    }
    headers_autocomplete = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': googleapykey,
        'X-Goog-FieldMask': 'suggestions.placePrediction.placeId,suggestions.placePrediction.structuredFormat'
    }

    try:        
        response = requests.post(url_autocomplete, json=payload_autocomplete, headers=headers_autocomplete)
        response.raise_for_status()  
        data = response.json()  

        localidades = []
        descripciones_vistas = set()

        for item in data.get('suggestions', []):
            prediction = item.get('placePrediction')
            if not prediction:
                continue

            place_id = prediction['placeId']
            structured = prediction.get('structuredFormat', {})
            municipio = structured.get('mainText', {}).get('text', '').strip()
            
            # PASO 2: Como ya ampliamos la cuota, llamamos a los detalles de cada PlaceId sin miedo al 429
            url_details = f'https://places.googleapis.com/v1/places/{place_id}?languageCode=es'
            headers_details = {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': googleapykey,
                'X-Goog-FieldMask': 'addressComponents,formattedAddress'
            }

            provincia_real = None
            formatted_address = None
            try:
                resp_details = requests.get(url_details, headers=headers_details)
                if resp_details.status_code == 200:
                    details_data = resp_details.json()
                    address_components = details_data.get('addressComponents', [])
                    formatted_address = details_data.get('formattedAddress', '')
                    
                    # Buscamos de forma infalible el tipo que representa a la provincia
                    for component in address_components:
                        types = component.get('types', [])
                        if 'administrative_area_level_2' in types:
                            provincia_real = component.get('longText')
                            break
                    if not provincia_real:
                        for component in address_components:
                            types = component.get('types', [])
                            if 'administrative_area_level_1' in types:
                                provincia_real = component.get('longText')
                                break   
                   

            except Exception as detail_err:
                print(f"Error recuperando detalle para {place_id}: {detail_err}")

            if not provincia_real and formatted_address:
                partes_address = [p.strip() for p in formatted_address.split(',') if p.strip()]
                
                
                if partes_address and partes_address[-1].lower() in ['españa', 'spain']:
                    partes_address.pop()
                
                
                if partes_address:
                    provincia_real = partes_address[-1]

            # PASO 3: Construimos la descripción combinando Municipio + Provincia
            if provincia_real:
                provincia_limpia = (provincia_real
                             .replace('Province of ', '')
                             .replace('Provincia de ', '')
                             .replace('Provincia d\'', '')
                             .strip())
                provincia_limpia = re.sub(r'\d+', '', provincia_limpia).strip()
                
                if municipio.lower() == provincia_limpia.lower():
                    descripcion = municipio
                else:
                    descripcion = f"{municipio}, {provincia_limpia}"
            else:
                secundario = structured.get('secondaryText', {}).get('text', '').strip()
                secundario_limpio = secundario.replace(', España', '').replace('España', '').strip()
                if secundario_limpio:
                    descripcion = f"{municipio}, {secundario_limpio}"
                else:
                    descripcion = municipio

            # Control de duplicados antes de enviar a Angular
            if descripcion not in descripciones_vistas:
                descripciones_vistas.add(descripcion)
                localidades.append({
                    'descripcion': descripcion,
                    'place_id': place_id
                })            
                
        return jsonify(localidades), 200
    
    except requests.exceptions.RequestException as e:   
        print(f"Error en Google API Autocomplete: {e.response.text if e.response else e}")     
        return jsonify({'error': str(e)}), 500
    



# Función para detectar el idioma en el que viene el texto de un input #
# Cogemos los datos que vienen del json, concretamente lo que vienen en el campo 'texto'. 
# project_id, client, location y parent --> configuración propia de la API de Google.
# response --> le pasamos los parametros necesarios (idioma_del_texto lo hemos extraido del json)
# del response que devuelve google, lo transformamos en un objeto del que extraemos "idioma" y "confianza"
# lenguage_code y confidence son atributos propios de la API
# devolvemos el resultado que es el objeto que hemos creado (resultado)
@apigoogle_blueprint.route('/detectar_idioma', methods=['POST'])
def detectar_idioma():    
    try:
        datos = request.get_json()
        idioma_del_texto = datos.get('texto')

        if not idioma_del_texto:
            return jsonify ({"Error": "No se proporcionó texto"}), 400
        
        project_id = "prideride"
        client = translate.TranslationServiceClient()
        location = "global"
        parent = f"projects/{project_id}/locations/{location}"

        response = client.detect_language(
            content= idioma_del_texto,
            parent=parent,
            mime_type="text/plain",  # mime types: text/plain, text/html
        )
        print("respuesta backend: ", response)
        resultado = {
            "idioma": response.languages[0].language_code,
            "confianza": response.languages[0].confidence
        }
        return resultado
    
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500
    


# Función para la traducción dinámica de textos libres (comentarios, detalles viaje, etc) #
# Extraemos el json (objetoRecibido) y de este objeto extraemos los atributos: 
#   texto --> se lo pasamos a textoAtraducir
#   idioma_destino --> se lo pasamos a idioma_destino
#   idioma_origen --> se lo pasamos a idioma_origen
# client --> llama a un servicio propio de la API, y "location", project_id y parent son otros atributos que necesita la API de Google
# response --> Accede a la función translate_text (propia de la API) y con el request le pasamos parametros de configuración, en contents le estamos pasando el texto que hemos
# extraido del json. 
# texto_final  --> el response devuelve un objeto y se accede a la posición 0 de dicho objeto para obtener el atributo translated_text (esto es lo que devolvemos en el return
# pero en un json.)
@apigoogle_blueprint.route('/traducir_texto', methods=['POST'])
def translate_text():
    try:
        objetoRecibido = request.get_json()
        textoATraducir = objetoRecibido.get('texto')
        idioma_destino = objetoRecibido.get('idioma_destino')
        idioma_origen = objetoRecibido.get('idioma_origen')        

        client = translate.TranslationServiceClient()
        location = "global"
        project_id="prideride"
        parent = f"projects/{project_id}/locations/{location}"
        response = client.translate_text(
            request={
                "parent": parent,
                "contents": [textoATraducir],
                "mime_type": "text/plain",
                "source_language_code": idioma_origen,
                "target_language_code": idioma_destino,
            }
        )
        print ('respuestaaaa: ', response)        
        texto_final = response.translations[0].translated_text
        return  jsonify({'texto_traducido':texto_final})
        

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500
