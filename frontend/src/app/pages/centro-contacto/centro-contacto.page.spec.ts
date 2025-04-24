import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentroContactoPage } from './centro-contacto.page';

describe('CentroContactoPage', () => {
  let component: CentroContactoPage;
  let fixture: ComponentFixture<CentroContactoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
