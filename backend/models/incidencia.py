from flask import json
from extensions import db
from datetime import datetime, timezone, timedelta
from enum import Enum
from sqlalchemy import JSON
from models.enums import CategoriaIncidenciaEnum, SubCategoriasIncidenciasEnum, TipoAperturaIncidenciaEnum, EstadoIncidenciaEnum, TipoCancelacionIncidenciaEnum


class Incidencia(db.Model):
    __tablename__ = 'incidencias'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    categoria = db.Column(
        db.String(50), 
        nullable=False, 
        default=CategoriaIncidenciaEnum.USUARIO.value
    )
    subcategoria = db.Column(
        db.String(50), 
        nullable=False
    )
    tipo_apertura = db.Column(
        db.String(50), 
        nullable=False, 
        default=TipoAperturaIncidenciaEnum.USUARIO.value
    )
    # --- RELACIONES CON USUARIOS Y VIAJES ---
    usuario_remitente_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    usuario_reportado_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=True) 
    viaje_id = db.Column(db.Integer, db.ForeignKey('viajes.id'), nullable=True)
    # --- 3. CONTENIDO DE LA INCIDENCIA ---
    resumen = db.Column(db.String(255), nullable=False)
    descripcion = db.Column(db.Text, nullable=False)

    # --- ESTADOS Y GESTIÓN ---
    estado = db.Column(
        db.String(50), 
        default=EstadoIncidenciaEnum.INICIADA.value, 
        nullable=False
    )
    motivo_cancelacion = db.Column(db.String(50), nullable=True)
    resolucion_notas = db.Column(db.Text, nullable=True)

    # --- 5. TIMESTAMPS ---
    created_at = db.Column(db.DateTime, default=datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=datetime.now(timezone.utc), onupdate=datetime.now(timezone.utc))

    # --- RELACIONES ---
    remitente_incidencia = db.relationship('Usuario', foreign_keys=[usuario_remitente_id], backref='incidencias_creadas')
    usuario_reportado = db.relationship('Usuario', foreign_keys=[usuario_reportado_id], backref='incidencias_recibidas')
    viaje = db.relationship('Viaje', backref='incidencias', lazy=True)

    adjuntos = db.relationship('IncidenciaAdjunto', backref='incidencia', cascade='all, delete-orphan')
    mensajes = db.relationship('IncidenciaMensaje', backref='incidencia', cascade='all, delete-orphan')

    # --- SERIALIZACIÓN ---
    def serialize(self):
        return {
            "id": self.id,
            "categoria": self.categoria,
            "subcategoria": self.subcategoria,
            "tipo_apertura": self.tipo_apertura,
            "usuario_remitente_id": self.usuario_remitente_id,
            "usuario_reportado_id": self.usuario_reportado_id,
            "viaje_id": self.viaje_id,
            "resumen": self.resumen,
            "descripcion": self.descripcion,
            "estado": self.estado,
            "motivo_cancelacion": self.motivo_cancelacion,
            "resolucion_notas": self.resolucion_notas,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
            "adjuntos": [a.serialize() for a in self.adjuntos],
            "mensajes": [m.serialize() for m in self.mensajes]
        }

class IncidenciaAdjunto(db.Model):
    __tablename__ = 'incidencias_adjuntos'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    incidencia_id = db.Column(db.Integer, db.ForeignKey('incidencias.id', ondelete='CASCADE'), nullable=False)
    url_archivo = db.Column(db.String(500), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(timezone.utc))
    def serialize(self):
        return {
            "id": self.id,
            "url_archivo": self.url_archivo,
            "created_at": self.created_at.isoformat()
        }

class IncidenciaMensaje(db.Model):
    __tablename__ = 'incidencias_mensajes'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    incidencia_id = db.Column(db.Integer, db.ForeignKey('incidencias.id', ondelete='CASCADE'), nullable=False)
    emisor_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    mensaje = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    emisor = db.relationship('Usuario', foreign_keys=[emisor_id])

    def serialize(self):
        return {
            "id": self.id,
            "emisor_id": self.emisor_id,
            "mensaje": self.mensaje,
            "created_at": self.created_at.isoformat()
        }
