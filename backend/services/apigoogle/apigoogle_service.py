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
    
    #Si la longitud es menor de 3 se devuelve la lista vacía, sin error. 
    if len(query) < 3 or not re.match(patron_letras, query):
        return jsonify([]), 200

    url = 'https://places.googleapis.com/v1/places:autocomplete'   
    payload = {
        "input": query,
        "languageCode": "es",
        "includedRegionCodes": ["es"],
        "includedPrimaryTypes": ["locality"]
    }
    headers = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': googleapykey,
        'X-Goog-FieldMask': 'suggestions.placePrediction.text,suggestions.placePrediction.placeId'
    }


    try:        
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()  
        data = response.json()  
        print('DATA ORIGEN: ', data)


        # Extraer las predicciones de la respuesta
        localidades = []
        for item in data.get('suggestions', []):
            print ('item: ', item)
            prediction = item.get('placePrediction')

            if prediction:
                texto_completo = prediction.get('text', {}).get('text', '')
                partes = [p.strip() for p in texto_completo.split(',')]
                partes_sin_pais = [p for p in partes if p.lower() != 'españa']

                if len(partes_sin_pais) >=2:
                    ciudad = partes_sin_pais[0]
                    provincia = partes_sin_pais[1]
                    descripcion = f"{ciudad} ({provincia})"
                elif len (partes_sin_pais) == 1:
                    descripcion = partes_sin_pais[0]
                else:
                    descripcion = texto_completo
                

                localidades.append({
                    'descripcion': descripcion,
                    'place_id': prediction['placeId']
        })
        
        return jsonify(localidades), 200
    except requests.exceptions.RequestException as e:   
        print(f"Error en Google API: {e.response.text if e.response else e}")     
        return jsonify({'error': str(e)}), 500
    

#Vinculada a la función anterior, devuelve la provincia según el municipio escogido
def detalle_localidad(place_id):
        url = f'https://places.googleapis.com/v1/places/{place_id}'

        headers = {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': googleapykey,
            'X-Goog-FieldMask': 'addressComponents'
        }

        respuesta = requests.get(url, headers=headers)
        

        try:

            if respuesta.status_code == 200:
                data = respuesta.json()
                address_components = data.get('addressComponents',[])
                print ('Address Component: ', address_components)

                provincia = None
                for component in address_components:
                    if 'administrative_area_level_2' in component.get('types', []):
                        provincia = component.get('longtext')
                        break

                return provincia
            else:
                print(f"Error en detalle_localidad: {respuesta.status_code} - {respuesta.text}")
                return None
        except Exception as e:
            print(f"Excepción en detalle_localidad: {str(e)}")
            return None





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
