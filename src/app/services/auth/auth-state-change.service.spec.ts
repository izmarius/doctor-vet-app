import { TestBed } from '@angular/core/testing';

import { AuthStateChangeService } from './auth-state-change.service';

describe('AuthStateChangeService', () => {
  let service: AuthStateChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStateChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
