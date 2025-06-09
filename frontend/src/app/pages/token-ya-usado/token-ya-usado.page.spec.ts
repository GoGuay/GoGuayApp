import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenYaUsadoPage } from './token-ya-usado.page';

describe('TokenYaUsadoPage', () => {
  let component: TokenYaUsadoPage;
  let fixture: ComponentFixture<TokenYaUsadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenYaUsadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
