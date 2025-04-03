import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-busca-un-viaje-principal',
  standalone: true,
  imports: [IonicModule, MatButtonModule, TranslateModule, MatIcon],
  templateUrl: './busca-un-viaje-principal.component.html',
  styleUrls: ['./busca-un-viaje-principal.component.scss'],
})
export class BuscaUnViajePrincipalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  openSearch(){}

}
