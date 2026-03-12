import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscaUnViajePrincipalComponent } from './buscador_viaje_home.component';

describe('BuscaUnViajePrincipalComponent', () => {
  let component: BuscaUnViajePrincipalComponent;
  let fixture: ComponentFixture<BuscaUnViajePrincipalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaUnViajePrincipalComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscaUnViajePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
