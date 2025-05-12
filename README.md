[	GUÍA PYTHON		]

-> Comandos para crear las migraciones sin necesidad de crear un entorno virtual:
	- Tienes que estar ubicado en el directorio /backend para que estos funcionen.
	- Si ya has ejecutado el comoando "db init" este ya no es necesario volver a ejecutarlo
	  cada vez que quieras actualizar las migraciones, solo es necesario la primera vez.
	  

    python -m flask db init
    python -m flask db migrate -m "Corregir relaciones con claves foráneas ambiguas"
    python -m flask db upgrade
	
	
	*** NOTA: Si aparece el error que no encuentra una versión anterior, seguir los siguientes pasos:
		- Eliminar el directorio 'migrations'
		- Eliminar el directorio '__pycache__'



python app.py

yipf iibf txew sgsm