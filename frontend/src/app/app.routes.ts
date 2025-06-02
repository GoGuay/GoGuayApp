import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./pages/registro/registro.component').then(
        (m) => m.RegistroComponent
      ),
  },
  {
    path: 'sobre-nosotros',
    loadComponent: () =>
      import('./pages/sobre-nosotros/sobre-nosotros.page').then(
        (m) => m.SobreNosotrosPage
      ),
  },
  {
    path: 'cookies',
    loadComponent: () =>
      import('./pages/cookies/cookies.page').then((m) => m.CookiesPage),
  },
  {
    path: 'busqueda-viajes',
    loadComponent: () =>
      import('./pages/busqueda-viajes/busqueda-viajes.page').then(
        (m) => m.BusquedaViajesPage
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'panel-usuario',
    loadComponent: () =>
      import('./pages/panel-usuario/panel-usuario.page').then(
        (m) => m.PanelUsuarioPage
      ),
  },
  {
    path: 'nuevo-viaje',
    loadComponent: () =>
      import('./pages/nuevoViaje/nuevo-viaje/nuevo-viaje.page').then(
        (m) => m.NuevoViajePage
      ),
  },
  {
    path: 'data-viaje',
    loadComponent: () =>
      import('./pages/nuevoViaje/data-viaje/data-viaje.page').then(
        (m) => m.DataViajePage
      ),
  },
  {
    path: 'resumen-viaje',
    loadComponent: () =>
      import(
        './pages/nuevoViaje/data-viaje/componentes-viaje/resumen-viaje/resumen-viaje.component'
      ).then((m) => m.ResumenViajeComponent),
  },
  {
    path: 'centro-ayuda',
    loadComponent: () =>
      import('./pages/centro-ayuda/centro-ayuda.page').then(
        (m) => m.CentroAyudaPage
      ),
  },
  {
    path: 'faqs',
    loadComponent: () =>
      import('./pages/faqs/faqs.page').then((m) => m.FaqsPage),
  },
  {
    path: 'mi-perfil',
    loadComponent: () =>
      import('./pages/paginas-panel-usuario/mi-perfil/mi-perfil.page').then(
        (m) => m.MiPerfilPage
      ),
  },
  {
    path: 'datos-contacto',
    loadComponent: () =>
      import(
        './pages/paginas-panel-usuario/datos-contacto/datos-contacto.page'
      ).then((m) => m.DatosContactoPage),
  },
  {
    path: 'terminos',
    loadComponent: () =>
      import('./pages/terminos/terminos.page').then((m) => m.TerminosPage),
  },
  {
    path: 'saldo-transferencias',
    loadComponent: () =>
      import(
        './pages/paginas-panel-usuario/saldo-transferencias/saldo-transferencias.page'
      ).then((m) => m.SaldoTransferenciasPage),
  },
  {
    path: 'decalogo',
    loadComponent: () =>
      import('./pages/decalogo/decalogo.page').then((m) => m.DecalogoPage),
  },
  {
    path: 'perfil-publico',
    loadComponent: () =>
      import('./pages/perfil-publico/perfil-publico.page').then(
        (m) => m.PerfilPublicoPage
      ),
  },

  {
    path: 'verificaciones-perfil',
    loadComponent: () =>
      import(
        './pages/paginas-panel-usuario/verificaciones-perfil/verificaciones-perfil.page'
      ).then((m) => m.VerificacionesPerfilPage),
  },
  {
    path: 'encuesta-satisfaccion',
    loadComponent: () =>
      import('./pages/encuesta-satisfaccion/encuesta-satisfaccion.page').then(
        (m) => m.EncuestaSatisfaccionPage
      ),
  },
  {
    path: 'verificar-email/:token',
    loadComponent: () =>
      import('./pages/verificar-email/verificar-email.page').then(
        (m) => m.VerificarEmailPage
      ),
  },
  {
    path: 'encuesta-satisfaccion',
    loadComponent: () => import('./pages/encuesta-satisfaccion/encuesta-satisfaccion.page').then(m => m.EncuestaSatisfaccionPage)
  },
  {
    path: 'centro-contacto',
    loadComponent: () => import('./pages/centro-contacto/centro-contacto.page').then(m => m.CentroContactoPage)
  },  {
    path: 'ajustes-aplicacion',
    loadComponent: () => import('./pages/ajustes-aplicacion/ajustes-aplicacion.page').then( m => m.AjustesAplicacionPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },
  {
    path: 'notificaciones',
    loadComponent: () => import('./pages/notificaciones/notificaciones.page').then( m => m.NotificacionesPage)
  },



];
