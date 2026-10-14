import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkFinalizarRegistroPage } from './link-finalizar-registro.page';

describe('LinkFinalizarRegistroPage', () => {
  let component: LinkFinalizarRegistroPage;
  let fixture: ComponentFixture<LinkFinalizarRegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkFinalizarRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
