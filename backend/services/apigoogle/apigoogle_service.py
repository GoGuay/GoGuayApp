# # # # # # # # # # # # # # # # # # # # # # # # # # # # 
#  SERVICIO DEDICADO PARA LA INFORMACIÓN DEL USUARIO  #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # 

from flask import Blueprint, jsonify, Response,  request
import requests
import os
from dotenv import load_dotenv
from google.cloud import translate






# Nombre único para evitar conflictos
apigoogle_blueprint = Blueprint('apigoogle', __name__)

# Cargar el archivo .env
load_dotenv()

# Acceder a la variable de entorno 'GOOGLE_API_KEY'
googleapykey=os.getenv('GOOGLE_API_KEY')


#Busca una localidad según los caracteres que introduzca el usuario
@apigoogle_blueprint.route('/buscar_localidad', methods=['GET'])
def buscar_localidad():
    query = request.args.get('q')
    url = f'https://maps.googleapis.com/maps/api/place/autocomplete/json?input={query}&language=es&types=locality&components=country:ES&key={googleapykey}'
    
    try:        
        response = requests.get(url)
        response.raise_for_status()  
        data = response.json()  

        # Extraer las predicciones de la respuesta
        localidades = []
        for item in data.get('predictions', []):
            place_id = item['place_id']

            provincia = detalle_localidad(place_id)

            localidades.append({
                'descripcion': item['description'],  
                'place_id': item['place_id'],    
                'provincia': provincia
            })

        
        return jsonify(localidades), 200
    except requests.exceptions.RequestException as e:        
        return jsonify({'error': str(e)}), 500
    

#Vinculada a la función anterior, devuelve la provincia según el municipio escogido
def detalle_localidad(place_id):
        url = f'https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&key={googleapykey}'
        respuesta = requests.get(url)
        if respuesta.status_code == 200:
            data = respuesta.json()
            address_components = data.get('result', {}).get('address_components',[])

            provincia = None
            for component in address_components:
                if 'administrative_area_level_2' in component ['types']:
                    provincia = component['long_name']
                    break

            return provincia
        else:
            print (f"Error: {respuesta.status_code}")
            return None


def translate_text(text, idioma_destino, idioma_origen):

    client = translate.TranslationServiceClient()
    location = "global"
    project_id="prideride"
    parent = f"projects/{project_id}/locations/{location}"
    response = client.translate_text(
        request={
            "parent": parent,
            "contents": [text],
            "mime_type": "text/plain",
            "source_language_code": idioma_origen,
            "target_language_code": idioma_destino,
        }
    )

    for translation in response.translations:
        print("Translated text: {}".format(translation.translated_text))


