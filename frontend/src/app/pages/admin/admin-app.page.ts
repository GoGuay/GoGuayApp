import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IonicModule, NavController } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { peopleOutline, mailUnreadOutline, eyeOutline, lockClosedOutline, lockOpenOutline } from 'ionicons/icons';
import { UserServicesService } from "src/app/core/user-services/user-services.service";
import { NavbarAdmin } from "./shared-admin/navbar-admin/navbar-admin.page";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin-app.page.html',
    styleUrls: ['./admin-app.page.scss'],
    imports: [CommonModule, IonicModule, NavbarAdmin]
})
export class AdminApp implements OnInit {
    listaUsuarios: any[] = [];
    avatar: string = '../../../assets/User-Profile-PNG-Image.png'

    usuarios = [
        { id: 1, nombre: 'Alex G.', email: 'alex@pride.com', restringido: false, avatar: 'https://i.pravatar.cc/150?u=1' },
        { id: 2, nombre: 'Santi M.', email: 'santi@trans.org', restringido: true, avatar: 'https://i.pravatar.cc/150?u=2' },
        { id: 3, nombre: 'Carla R.', email: 'carla@love.es', restringido: false, avatar: 'https://i.pravatar.cc/150?u=3' },
    ];

    mensajes = [
        { id: 101, asunto: 'Duda sobre seguridad', remitente: 'Alex G.', fecha: '12/10', leido: false },
        { id: 102, asunto: 'Reporte de usuario', remitente: 'Carla R.', fecha: '11/10', leido: true }
    ];

    totalUsuarios = 1250;
    mensajesPendientes = 5;
    usuariosRestringidos = 12;

    constructor(public navCtrl: NavController, private userService: UserServicesService) {
        addIcons({ peopleOutline, mailUnreadOutline, eyeOutline, lockClosedOutline, lockOpenOutline });
    }

    ngOnInit() {
        this.obtenerUsuariosApp();
    }

    toggleRestriccion(user: any) {
        user.restringido = !user.restringido;
        console.log(`Estado de ${user.nombre} cambiado a: ${user.restringido}`);
    }

    filtrarUsuarios(event: any) {
        const query = event.target.value.toLowerCase();
    }

    verDetalles(user: any) {
        console.log('Abriendo detalles de:', user);
    }

    abrirMensaje(msg: any) {
        msg.leido = true;
    }

    logout() {

    }

    goHome() {
        this.navCtrl.navigateRoot(['/home']);
    }

    goEvents() {
        this.navCtrl.navigateRoot(['/events-admin']);
    }

    obtenerUsuariosApp() {
        this.userService.obtenerUsuarios().subscribe(
            (respuesta) => {
                this.listaUsuarios = respuesta;
                console.log('Lista de usuarios: ', this.listaUsuarios);

            },
            (error) => {
                console.error('Error al obtener la lista de usuarios registrados:', error);
            }
        );
    }

    goGuayApp() {
        this.navCtrl.navigateRoot(['/home']);
    }
}