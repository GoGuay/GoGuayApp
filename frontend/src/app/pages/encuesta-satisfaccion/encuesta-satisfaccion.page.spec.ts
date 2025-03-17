import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncuestaSatisfaccionPage } from './encuesta-satisfaccion.page';

describe('EncuestaSatisfaccionPage', () => {
  let component: EncuestaSatisfaccionPage;
  let fixture: ComponentFixture<EncuestaSatisfaccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaSatisfaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
