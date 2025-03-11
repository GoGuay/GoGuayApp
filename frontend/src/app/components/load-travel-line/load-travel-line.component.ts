import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-load-travel-line',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './load-travel-line.component.html',
  styleUrls: ['./load-travel-line.component.scss'],
})
export class LoadTravelLineComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
