import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IonicModule, NavController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-busca-un-viaje-principal',
  standalone: true,
  imports: [IonicModule, MatButtonModule, TranslateModule],
  templateUrl: './busca-un-viaje-principal.component.html',
  styleUrls: ['./busca-un-viaje-principal.component.scss'],
})
export class BuscaUnViajePrincipalComponent  implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  openSearch(){
     this.navCtrl.navigateRoot(['/busqueda-viajes']);
  }

}
