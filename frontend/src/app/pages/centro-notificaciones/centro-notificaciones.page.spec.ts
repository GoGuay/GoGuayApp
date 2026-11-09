import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentroNotificacionesPage } from './centro-notificaciones.page';

describe('CentroNotificacionesPage', () => {
  let component: CentroNotificacionesPage;
  let fixture: ComponentFixture<CentroNotificacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroNotificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
