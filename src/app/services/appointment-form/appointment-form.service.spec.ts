/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppointmentFormService } from './appointment-form.service';

describe('Service: AppointmentForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentFormService]
    });
  });

  it('should ...', inject([AppointmentFormService], (service: AppointmentFormService) => {
    expect(service).toBeTruthy();
  }));
});
