import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IonicModule, NavController } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { peopleOutline, mailUnreadOutline, eyeOutline, lockClosedOutline, lockOpenOutline } from 'ionicons/icons';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin-app.page.html',
    styleUrls: ['./admin-app.page.scss'],
    imports: [CommonModule, IonicModule]
})
export class AdminApp implements OnInit {


    usuarios = [
        { id: 1, nombre: 'Alex G.', email: 'alex@pride.com', restringido: false, avatar: 'https://i.pravatar.cc/150?u=1' },
        { id: 2, nombre: 'Santi M.', email: 'santi@trans.org', restringido: true, avatar: 'https://i.pravatar.cc/150?u=2' },
        { id: 3, nombre: 'Carla R.', email: 'carla@love.es', restringido: false, avatar: 'https://i.pravatar.cc/150?u=3' },
    ];

    mensajes = [
        { id: 101, asunto: 'Duda sobre seguridad', remitente: 'Alex G.', fecha: '12/10', leido: false },
        { id: 102, asunto: 'Reporte de usuario', remitente: 'Carla R.', fecha: '11/10', leido: true }
    ];

    // Stats
    totalUsuarios = 1250;
    mensajesPendientes = 5;
    usuariosRestringidos = 12;

    constructor(public navCtrl: NavController) {
        addIcons({ peopleOutline, mailUnreadOutline, eyeOutline, lockClosedOutline, lockOpenOutline });
    }

    ngOnInit() { }

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
}