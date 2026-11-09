import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificacionEmailPage } from './modificacion-email.page';

describe('ModificacionEmailPage', () => {
  let component: ModificacionEmailPage;
  let fixture: ComponentFixture<ModificacionEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
