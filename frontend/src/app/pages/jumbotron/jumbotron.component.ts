import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './jumbotron.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent implements OnInit {
  @Input() title: string = 'Default Title';
  @Input() imageSrc: string = '../../../assets/folder/jumbo.jpg';
  @Input() helpText: string = 'Help Text';

  constructor() {}

  ngOnInit() {}
}
