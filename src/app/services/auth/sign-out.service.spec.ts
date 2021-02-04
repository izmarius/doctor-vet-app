/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignOutService } from './sign-out.service';

describe('Service: SignOut', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignOutService]
    });
  });

  it('should ...', inject([SignOutService], (service: SignOutService) => {
    expect(service).toBeTruthy();
  }));
});
