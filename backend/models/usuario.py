from flask import json
from models.enums import PreferenciasViajeEnum, RolUsuarioEnum, Genero, Orientacion
from extensions import db
from datetime import datetime
from enum import Enum
from sqlalchemy import JSON




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
    telefono = db.Column(db.String(15), unique=True, nullable=False)
    telefonoVerificado = db.Column(db.Boolean, default=False, nullable=True)
    biografia = db.Column(db.String(500), nullable=True) 
    fotoPerfil = db.Column(db.String(250), nullable=True)
    fotoCabecera = db.Column(db.String(250), nullable=True)
    preferencias = db.Column(JSON, nullable=False, default=lambda: [PreferenciasViajeEnum.silencio.value]) 
    rolPerfil = db.Column(db.String(50), nullable=True, default=RolUsuarioEnum.usuario.value)
    dni_verificado = db.Column(db.Boolean, default=False, nullable=True)
    fotoDocumentoDelantera= db.Column(db.String(250), nullable=True)
    fotoDocumentoTrasera = db.Column(db.String(250), nullable=True)
    fotoCarnetCondDelantera = db.Column(db.String(250), nullable=True)
    fotoCarnetCondTrasera = db.Column(db.String(250), nullable=True)
    carnet_conducir_verificado = db.Column(db.Boolean, default=False, nullable=True)
    numero_carnet_conducir = db.Column(db.String(50), nullable=True)
    fecha_vencimiento_carnet = db.Column(db.Date) 
    fecha_nacimiento = db.Column(db.Date)
    comunic_comerciales = db.Column(db.Boolean, default=False, nullable=True)
    comunic_terceros = db.Column(db.Boolean, default=False, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relaciones
    vehiculos = db.relationship('Vehiculo', backref='usuario', cascade='all, delete-orphan')
    monedero = db.relationship('Monedero', backref='usuario', uselist=False, cascade='all, delete-orphan')
    puntuaciones = db.relationship('Puntuacion', backref='usuario', cascade='all, delete-orphan', foreign_keys='Puntuacion.usuario_id')
    evaluaciones_realizadas = db.relationship(
        'Puntuacion', 
        foreign_keys='Puntuacion.evaluador_id', 
        backref='evaluador',
        cascade='all, delete-orphan'
    )
    notificaciones = db.relationship('Notificacion', backref='usuario', cascade='all, delete-orphan')

    @property
    def puntuacion_promedio(self):
        from statistics import mean
        return round(mean((p.puntuacion for p in self.puntuaciones)), 1) if self.puntuaciones else 0

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
            "password": self.password,          
            "telefono": self.telefono,
            "telefonoVerificado": self.telefonoVerificado,
            "biografia": self.biografia,
            "fotoPerfil": self.fotoPerfil,
            "fotoCabecera": self.fotoCabecera,
            "preferencias": preferencias,
            "rolPerfil": self.rolPerfil,
            "dni_verificado": self.dni_verificado,
            "carnet_conducir_verificado": self.carnet_conducir_verificado,
            "numero_carnet_conducir": self.numero_carnet_conducir,
            "fecha_vencimiento_carnet": self.fecha_vencimiento_carnet.isoformat() if self.fecha_vencimiento_carnet else None,
            "fecha_nacimiento": self.fecha_nacimiento.isoformat() if self.fecha_nacimiento else None,
            "vehiculos": [v.serialize() for v in self.vehiculos],
            "comunic_comerciales": self.comunic_comerciales,
            "comunic_terceros":self.comunic_terceros,
            "monedero": self.monedero.serialize() if self.monedero else None,
            "puntuacion_promedio": self.puntuacion_promedio,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
            "fotoDocumentoDelantera": self.fotoDocumentoDelantera,
            "fotoDocumentoTrasera": self.fotoDocumentoTrasera,
            "fotoCarnetCondDelantera": self.fotoCarnetCondDelantera,
            "fotoCarnetCondTrasera": self.fotoCarnetCondTrasera,
        }
