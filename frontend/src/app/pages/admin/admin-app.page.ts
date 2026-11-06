import { CommonModule } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { IonicModule, NavController } from "@ionic/angular";
import { addIcons } from 'ionicons';
import {
    peopleOutline,
    mailUnreadOutline,
    eyeOutline,
    lockClosedOutline,
    lockOpenOutline,
    barChartOutline,
    calendarOutline,
    warningOutline,
    clipboardOutline,
    timeOutline,
    arrowForwardOutline
} from 'ionicons/icons';
import { UserServicesService } from "../../core/user-services/user-services.service";
import { NavbarAdmin } from "./shared-admin/navbar-admin/navbar-admin.page";
import { FuncionesComunes } from "../../core/funciones-comunes/funciones-comunes.service";
import { Usuario } from "../../models/user/usuario.model";
import { Chart, registerables } from 'chart.js';
import { EncuestaService } from "../../core/encuesta_satisfaccion-service/encuesta_satisfaccion.service";
import { IncidenciasService } from "../../core/incidencias-service/incidencias-service.service";

Chart.register(...registerables);

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin-app.page.html',
    styleUrls: ['./admin-app.page.scss'],
    imports: [CommonModule, IonicModule, NavbarAdmin]
})
export class AdminApp implements OnInit, AfterViewInit {
    @ViewChild('barCanvas') private barCanvas!: ElementRef;

    listaUsuarios: any[] = [];
    listaUsuariosFiltrados: any[] = [];
    avatarDefault: string = '../../../assets/User-Profile-PNG-Image.png';

    hours: string = '';
    minutes: string = '';

    usuario: any;
    userData: Usuario = {} as Usuario;
    userLoggedIn: boolean = false;

    // Métricas / Notificaciones dinámicas
    mensajes: any[] = [
        { id: 101, asunto: 'Duda sobre verificación QR', remitente: 'Alex G.', fecha: '12/10', leido: false },
        { id: 102, asunto: 'Incidencia con monedero PayPal', remitente: 'Carla R.', fecha: '11/10', leido: true }
    ];

    mensajesPendientes: number = 1;
    usuariosRestringidosCount: number = 0;
    incidenciasPendientesCount: number = 0;
    nuevosUsuariosHoyCount: number = 0;

    barChart: any;
    listaEncuestas: any[] = [];
    promedioSatisfaccion: number = 0;
    totalEncuestas: number = 0;

    constructor(
        public navCtrl: NavController,
        private userService: UserServicesService,
        private funcionesComunes: FuncionesComunes,
        private encuestaService: EncuestaService,
        private incidenciasService: IncidenciasService
    ) {
        addIcons({
            peopleOutline,
            mailUnreadOutline,
            eyeOutline,
            lockClosedOutline,
            lockOpenOutline,
            barChartOutline,
            calendarOutline,
            warningOutline,
            clipboardOutline,
            timeOutline,
            arrowForwardOutline
        });
    }

    ngOnInit() {
        this.loadUserData();
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);

        this.userLoggedIn = this.funcionesComunes.isUserLoggedIn();

        if (this.userLoggedIn && this.userData?.usuario?.id) {
            this.obtenerUsuarioPorID(this.userData.usuario.id);
        }

        this.obtenerUsuariosApp();
        this.cargarEncuestas();
        this.cargarNotificacionesIncidencias();
    }

    ngAfterViewInit() {}

    loadUserData(): void {
        const data = localStorage.getItem('userData');
        if (data) {
            this.userData = JSON.parse(data);
        }
    }

    obtenerUsuarioPorID(id_usuario: number) {
        if (!id_usuario) return;
        this.userService.obtenerUsuarioPorID(id_usuario).subscribe({
            next: (resultado) => {
                this.usuario = resultado.usuario ? resultado.usuario : resultado;
            },
            error: (err) => console.error("Error cargando perfil admin", err)
        });
    }

    obtenerUsuariosApp() {
        this.userService.obtenerUsuarios().subscribe({
            next: (respuesta) => {
                this.listaUsuarios = respuesta || [];
                this.listaUsuariosFiltrados = [...this.listaUsuarios];
                this.calcularUsuariosRestringidos();
                this.calcularNuevosUsuariosHoy();
            },
            error: (error) => console.error('Error al obtener la lista de usuarios:', error)
        });
    }

    /**
     * Consulta el backend para saber cuántas incidencias requieren atención (INICIADA o EN_REVISION)
     */
    cargarNotificacionesIncidencias() {
        this.incidenciasService.obtenerTodasIncidenciasAdmin().subscribe({
            next: (incidencias: any[]) => {
                this.incidenciasPendientesCount = (incidencias || []).filter(
                    (i) => i.estado === 'INICIADA' || i.estado === 'EN_REVISION'
                ).length;
            },
            error: (err) => console.error('Error cargando incidencias para el resumen:', err)
        });
    }

    calcularUsuariosRestringidos() {
        this.usuariosRestringidosCount = this.listaUsuarios.filter(
            u => u.ya_ha_sido_suspendido || u.restringido
        ).length;
    }

    calcularNuevosUsuariosHoy() {
        const hoy = new Date().toISOString().split('T')[0];
        this.nuevosUsuariosHoyCount = this.listaUsuarios.filter(u => {
            if (!u.created_at) return false;
            return u.created_at.startsWith(hoy);
        }).length;
    }

    toggleRestriccion(user: any) {
        user.ya_ha_sido_suspendido = !user.ya_ha_sido_suspendido;
        this.calcularUsuariosRestringidos();
    }

    filtrarUsuarios(event: any) {
        const query = (event.target.value || '').toLowerCase().trim();
        if (!query) {
            this.listaUsuariosFiltrados = [...this.listaUsuarios];
            return;
        }

        this.listaUsuariosFiltrados = this.listaUsuarios.filter(user => {
            const nombre = (user.nombre || '').toLowerCase();
            const email = (user.email || '').toLowerCase();
            return nombre.includes(query) || email.includes(query);
        });
    }

    verDetalles(user: any) {
        console.log('Abriendo detalles del usuario:', user);
    }

    abrirMensaje(msg: any) {
        msg.leido = true;
        this.mensajesPendientes = this.mensajes.filter(m => !m.leido).length;
    }

    goHome() {
        this.navCtrl.navigateRoot(['/home']);
    }

    goEvents() {
        this.navCtrl.navigateRoot(['/events-admin']);
    }

    goGuayApp() {
        this.navCtrl.navigateRoot(['/home']);
    }

    goEncuestas() {
        this.navCtrl.navigateForward(['/gestion-encuestas']);
    }

    goIncidencias() {
        this.navCtrl.navigateForward(['/incidencias-admin']);
    }

    goGestionUsuarios() {
        this.navCtrl.navigateForward(['/gestion-usuarios-admin']);
    }

    updateTime() {
        const now = new Date();
        this.hours = now.getHours().toString().padStart(2, '0');
        this.minutes = now.getMinutes().toString().padStart(2, '0');
    }

    cargarEncuestas() {
        this.encuestaService.getTodasLasEncuestas().subscribe({
            next: (res) => {
                this.listaEncuestas = res || [];
                this.totalEncuestas = this.listaEncuestas.length;
                this.calcularMetricas();
                setTimeout(() => this.initChart(), 200);
            },
            error: (err) => {
                console.error("Error al cargar encuestas", err);
                setTimeout(() => this.initChart(), 200);
            }
        });
    }

    calcularMetricas() {
        if (this.totalEncuestas === 0) return;
        const suma = this.listaEncuestas.reduce((acc, curr) => acc + (curr.calificacion || 0), 0);
        this.promedioSatisfaccion = parseFloat((suma / this.totalEncuestas).toFixed(1));
    }

    initChart() {
        if (!this.barCanvas || !this.barCanvas.nativeElement) return;

        const dataDistribution = [0, 0, 0, 0, 0];

        if (this.listaEncuestas.length > 0) {
            this.listaEncuestas.forEach(e => {
                if (e.calificacion >= 1 && e.calificacion <= 5) {
                    dataDistribution[e.calificacion - 1]++;
                }
            });
        }

        if (this.barChart) {
            this.barChart.destroy();
        }

        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ['Pésimo', 'Regular', 'Bueno', 'Genial', 'Excelente'],
                datasets: [{
                    label: 'Nº de Valoraciones',
                    data: dataDistribution,
                    backgroundColor: ['#ffb7b7', '#f0d7b4', '#b3b5e6', '#b7e0b4', '#7c4dff'],
                    borderRadius: 12,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 1, color: '#666' },
                        grid: { color: 'rgba(0,0,0,0.05)' }
                    },
                    x: {
                        ticks: { color: '#666' },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}