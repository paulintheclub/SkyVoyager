import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { headerFooterGuard } from './header-footer.guard';

describe('headerFooterGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => headerFooterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
