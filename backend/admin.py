# admin.py
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from extensions import db
from models import Usuario, Vehiculo, Monedero, Puntuacion, Viaje, Notificacion
from views.HomeView import HomeView 
 
def setup_admin(app):
    admin = Admin(app, name='PRIDERIDE BD', template_mode='bootstrap4')

    # Agregar una vista personalizada de inicio
    admin.add_view(HomeView(name='Inicio', endpoint='home'))

    # Aquí agregas las vistas de tus modelos
    admin.add_view(ModelView(Usuario, db.session))
    admin.add_view(ModelView(Notificacion, db.session))
    admin.add_view(ModelView(Vehiculo, db.session))
    admin.add_view(ModelView(Monedero, db.session))
    admin.add_view(ModelView(Puntuacion, db.session))
    admin.add_view(ModelView(Viaje, db.session))


