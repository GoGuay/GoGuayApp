from enum import Enum

class RolUsuarioEnum(Enum):
    usuario = "usuario"
    admin = "admin"
    moderador = "moderador"

class PreferenciasViajeEnum(Enum):
    hablar = "Hablar"
    escuchar = "Escuchar música"
    dormir = "Dormir"
    silencio = "Ir en silencio"

class Genero(Enum):
    defecto = ""
    masculino = "masculino"
    femenino = "femenino"
    nobinario =  "no binario"
    noresponde = "Prefiero no contestar"

class Orientacion(Enum):
    defecto = ""
    Gay = "Gay"
    Lesbiana = "Lesbiana"
    Bisexual = "Bisexual"
    Pansexual = "Pansexual"
    Asexual = "Asexual"
    Demisexual = "Demisexual"
    Queer = "Queer"
    Otro = "Otro"




