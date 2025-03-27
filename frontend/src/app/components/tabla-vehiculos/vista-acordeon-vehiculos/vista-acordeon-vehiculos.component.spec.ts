import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistaAcordeonVehiculosComponent } from './vista-acordeon-vehiculos.component';

describe('VistaAcordeonVehiculosComponent', () => {
  let component: VistaAcordeonVehiculosComponent;
  let fixture: ComponentFixture<VistaAcordeonVehiculosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAcordeonVehiculosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistaAcordeonVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
