import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjustesAplicacionPage } from './ajustes-aplicacion.page';

describe('AjustesAplicacionPage', () => {
  let component: AjustesAplicacionPage;
  let fixture: ComponentFixture<AjustesAplicacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesAplicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
