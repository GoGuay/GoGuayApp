import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenExpiradoPage } from './token-expirado.page';

describe('TokenExpiradoPage', () => {
  let component: TokenExpiradoPage;
  let fixture: ComponentFixture<TokenExpiradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenExpiradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
