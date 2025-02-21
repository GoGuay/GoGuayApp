# views/home_view.py
from flask_admin import BaseView, expose
from flask import render_template

class HomeView(BaseView):
    @expose('/')
    def index(self):
        return self.render('admin_home.html', message='Bienvenido al panel de administración')
