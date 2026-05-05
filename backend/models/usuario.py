from flask import json
from models.enums import PreferenciasViajeEnum, RolUsuarioEnum, Genero, Orientacion
from models.cancelacion import Cancelacion
from extensions import db
from datetime import datetime
from enum import Enum
from sqlalchemy import JSON
import statistics


class Usuario(db.Model):
    __tablename__ = 'usuarios'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(120), nullable=False)
    apellidos = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(250), unique=True, nullable=False)
    emailVerificado = db.Column(db.Boolean, default=False)
    genero = db.Column(db.String(50), nullable=False, default=Genero.defecto.value)
    orientacion = db.Column(db.String(50), nullable=False, default=Orientacion.defecto.value) 
    pronombre = db.Column(db.String(250), nullable=True)
    password = db.Column(db.String(250), nullable=False)
    telefono = db.Column(db.String(15), unique=True, nullable=True)
    telefonoVerificado = db.Column(db.Boolean, default=False, nullable=True)
    biografia = db.Column(db.String(500), nullable=True) 
    fotoPerfil = db.Column(db.String(250), nullable=True)
    fotoPublicId = db.Column(db.String(255), nullable=True) 
    fotoCabecera = db.Column(db.String(250), nullable=True)
    preferencias = db.Column(JSON, nullable=True) 
    rolPerfil = db.Column(db.String(50), nullable=True, default=RolUsuarioEnum.usuario.value)
    fecha_nacimiento = db.Column(db.Date)
    comunic_comerciales = db.Column(db.Boolean, default=False, nullable=True)
    comunic_terceros = db.Column(db.Boolean, default=False, nullable=True)
    metodo_pago_preferido = db.Column(db.String(50), nullable=True, default='paypal')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


    # --- CAMPOS DE CONTROL Y SANCIONES ---
    bloqueado_desde = db.Column(db.DateTime, nullable=True)
    bloqueado_hasta = db.Column(db.DateTime, nullable=True) # Para suspensión de 6 meses
    ya_ha_sido_suspendido = db.Column(db.Boolean, default=False)     # Flag tras cumplir primera sanción
    motivo_bloqueo = db.Column(db.String(255), nullable=True) # Ej: "ICH Pasajero Crítico"
    
    # --- RELACIONES ---
    vehiculos = db.relationship('Vehiculo', backref='usuario', cascade='all, delete-orphan')
    notificaciones = db.relationship('Notificacion', backref='usuario', cascade='all, delete-orphan')
        # Viajes donde el usuario es el Conductor
    viajes_publicados = db.relationship('Viaje', backref='creador', lazy=True)
        # Reservas donde el usuario es el Pasajero
    reservas_realizadas = db.relationship('PasajeroViaje', backref='usuario', lazy=True)

        #Relaciones de valoraciones, opiniones de otros usuarios-
    puntuaciones = db.relationship('Puntuacion', backref='usuario', cascade='all, delete-orphan', foreign_keys='Puntuacion.usuario_id')
    evaluaciones_realizadas = db.relationship(
        'Puntuacion', 
        foreign_keys='Puntuacion.evaluador_id', 
        backref='evaluador',
        cascade='all, delete-orphan'
    )

    # --- LÓGICA DE VALORACIONES (ESTRELLAS) ---

    @property
    def estrellas_por_opiniones(self):
        """Media de puntuación recibida por otros usuarios al finalizar viajes"""
        return round(statistics.mean((p.puntuacion for p in self.puntuaciones)), 1) if self.puntuaciones else 0
    
    notificaciones = db.relationship('Notificacion', backref='usuario', cascade='all, delete-orphan')

    # Viajes donde el usuario es el Conductor
    viajes_publicados = db.relationship('Viaje', backref='creador', lazy=True)

    # Reservas donde el usuario es el Pasajero
    reservas_realizadas = db.relationship('PasajeroViaje', backref='pasajero_rel', lazy=True)

    # Cancelaciones provocadas por este usuario (como conductor o pasajero)
    cancelaciones_provocadas = db.relationship(
        'Cancelacion', 
        foreign_keys='Cancelacion.cancelado_por_id', 
        backref='autor',
        lazy='dynamic'
    )

     
    # --- LÓGICA DE CANCELACIONES (ICH Índice de Criticidad Histórico) ---

        #Para calcular el ICH del conductor. Se calcula a partir de la tercerca cancelación que haga el conductor de su viaje. 
    @property
    def ich_conductor(self):
        """
        Toma el total de viajes publicados por el conductor, con el len indica el numero total de elementos. Lo guarda en total_viajes.
        Si total_viajes es menor de 3 --> devuelve 0.0
        Inicializa puntos a 0.
        Se recorre la lista de cancelaciones_provocadas y se guarda cada elemento en "cancelacion". Despues acota los resultados con el if:
        viaje.usurio_id --> creador del viaje. Si el id de quien cancela el viaje es el mismo (==) que quien ha creado el viaje, sería el conductor, y se guarda ese dato en 'cancelaciones'.
        Recorre la lista de 'cancelaciones' y guarda cada resultado en 'cancelacion_guardada'. Guarda en antelación la diferencia entre la fecha de salida del viaje y la fecha de cancelación. Convierte la antelación en segundos y los divide entre 3600 para calcular las horas, y lo guarda en 'horas'. 
        if: si las horas son menos de 24, se sumarán 10 puntos. Si son igual o mayor que 24 e igual o menor que 72h, suma 5 puntos. Si son más de 72 horas, suma 1 punto. 
        return: El redondeo de la nota, que sale de dividir los puntos entre el total de viajes, con dos decimales. 
        """
        total_viajes = len(self.viajes_publicados)
        if total_viajes < 3:
            return 0.0
        
        puntos = 0
        cancelaciones = [cancelacion for cancelacion in self.cancelaciones_provocadas if cancelacion.viaje.usuario_id == self.id]
        
        for cancelacion_guardada in cancelaciones:
            antelacion = cancelacion_guardada.viaje.fecha_salida - cancelacion_guardada.fecha_cancelacion
            horas = antelacion.total_seconds() / 3600
            if horas < 24: puntos += 10
            elif 24 <= horas <= 72: puntos += 5
            else: puntos += 1
            
        return round(puntos / total_viajes, 2)
    


        #Para calcular el ICH del pasajero por cancelar reservas efectuadas. Se calcula desde la primera cancelación de reserva. 
    @property
    def ich_pasajero(self):
        """
        Toma el total de reservas hechas por el usuario, con el len indica el numero total de elementos. Lo guarda en total_reservas.
        Inicializa puntos a 0.
        Se recorre la lista de cancelaciones_provocadas y se guarda cada elemento en "cancelacion". Despues acota los resultados con el if:
        viaje.usurio_id --> creador del viaje. Si el id de quien cancela el viaje es DIFERENTE DE quien ha creado el viaje, es decir pasajero, se guarda ese dato en 'cancelaciones'.
        Recorre la lista de 'cancelaciones' y guarda cada resultado en 'cancelacion_guardada'. Guarda en antelación la diferencia entre la fecha de salida del viaje y la fecha de cancelación. Convierte la antelación en segundos y los divide entre 3600 para calcular las horas, y lo guarda en 'horas'. 
        If: Si las horas son menor o igual que 0 (viaje ya ha pasado o no se ha presentado), se suman 10 puntos de penalización. 
        reserva = next --> recorre la lista de reservas realizadas y los guarda si además el id de la reserva del viaje es el mismo id de viaje cancelado. 
        Se inicializa minutos_desde_reserva con un valor alto. 
        Si 'reserva' tiene datos, comparamos la fecha fecha de cancelacion con la fecha de confirmacion de la reserva, lo guardamos en delta_reserva. 
        Sacamos el total de segundos de delta_reserva y lo dividimos entre 60 para calcular los minutos. 
        Puntaje: si las horas restantes es menor o igual a 0 (no se ha presentado a la fecha/hora de salida), se penaliza con 10 puntos. 
        Si las horas restantes son menos de 24:
            - Si los minutos desde que ha obtenido la confirmación de la reserva hasta que cancela son igual o menor a 30 --> 3 puntos de penalización. 
            - Por el contrario, si han pasado más de 30 minutos se penaliza con 5 puntos. 
        Si las horas restantes son más de 24 horas (se cancela con más de un día de antelación), se penaliza con 1 punto. 
        """
        total_reservas = len(self.reservas_realizadas)
        if total_reservas == 0:
            return 0.0
        
        puntos = 0
        cancelaciones = [cancelacion for cancelacion in self.cancelaciones_provocadas if cancelacion.viaje.usuario_id != self.id]
        
        for cancelacion in cancelaciones:
            antelacion_salida = cancelacion.viaje.fecha_salida - cancelacion.fecha_cancelacion
            horas_restantes = antelacion_salida.total_seconds() / 3600
            
            reserva = next((r for r in self.reservas_realizadas if r.viaje_id == cancelacion.viaje_id), None)
            minutos_desde_reserva = 999
            
            if reserva:
                delta_reserva = cancelacion.fecha_cancelacion - reserva.fecha_confirmacion_reserva
                minutos_desde_reserva = delta_reserva.total_seconds() / 60

            
            if horas_restantes <= 0:
                puntos += 10  
            elif horas_restantes < 24:
                if minutos_desde_reserva <= 30:
                    puntos += 3  
                else:
                    puntos += 5 
            else:
                puntos += 1  
            
        return round(puntos / total_reservas, 2)
    

        #Nivel de fiabilidad de un usuario basado en las cancelaciones de viajes/reservas
    @property
    def estado_perfil(self):
        """
        Si el usuario tiene un bloqueo actualmente, devuelve el mensaje "Sancionado (suspensión temporal)" y sale de la función.
        max: Elige el número más alto entre 2 opciones: Si eres un buen conductor, pero un mal pasajero, el estado será crítico, ya que el perfil de pasajero tiene riesgo alto. 
        Con el if, se clasifica al usuario según su nota. 

        """
        if self.bloqueado_hasta and self.bloqueado_hasta > datetime.utcnow():
            return "Sancionado (Suspensión temporal)"
        
        # El estado lo define el ICH más desfavorable
        peor_ich = max(self.ich_conductor, self.ich_pasajero)
        
        if peor_ich <= 1.5: return "Óptimo"
        if 1.6 <= peor_ich <= 3.5: return "Bajo Advertencia"
        if 3.6 <= peor_ich <= 5.0: return "Crítico (Nivel 1)"
        return "Crítico (Nivel 2)"
    

    # --- 5. MÉTODOS DE UTILIDAD ---

    def serialize(self):
        preferencias = self.preferencias
        if isinstance(preferencias, str):
            try:
                preferencias = json.loads(preferencias)
            except json.JSONDecodeError:
                preferencias = []  # Si no es válido, asignamos un valor por defecto (vacío)
        elif preferencias is None:
            preferencias = [] 
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "email": self.email,
            "emailVerificado": self.emailVerificado,
            "genero": self.genero,
            "orientacion": self.orientacion,
            "pronombre": self.pronombre,  
            "password": "********",          
            "telefono": self.telefono,
            "telefonoVerificado": self.telefonoVerificado,
            "biografia": self.biografia,
            "fotoPerfil": self.fotoPerfil,
            "fotoCabecera": self.fotoCabecera,
            "preferencias": preferencias,
            "rolPerfil": self.rolPerfil,
            "fecha_nacimiento": self.fecha_nacimiento.isoformat() if self.fecha_nacimiento else None,
            "vehiculos": [v.serialize() for v in self.vehiculos],
            "comunic_comerciales": self.comunic_comerciales,
            "comunic_terceros":self.comunic_terceros,
            "estado_perfil": self.estado_perfil,
            "puntuaciones": self.estrellas_por_opiniones,
            "metodo_pago_preferido": self.metodo_pago_preferido,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
    
    ## Método para serializar solo los datos públicos del usuario (para mostrar en perfiles de otros usuarios, por ejemplo)
    def serialize_public(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "fotoPerfil": self.fotoPerfil,
            "puntuacion_promedio": self.estrellas_por_opiniones
        }
    




    

    


    

