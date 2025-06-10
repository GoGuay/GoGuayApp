import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tokenValidGuard } from './token-valid.guard';

describe('tokenValidGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tokenValidGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
