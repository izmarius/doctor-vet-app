import { DoctorServiceDTO } from './../../../data/modelDTO/dorctor-service-DTO';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { DoctorDTO } from 'src/app/data/modelDTO/doctor-DTO';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { DoctorServicesService } from 'src/app/services/doctor-service/doctor-services.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appoitment-form',
  templateUrl: './appoitment-form.component.html',
  styleUrls: ['./appoitment-form.component.scss'],
})
export class AppoitmentFormComponent implements OnInit {
  sampleForm: FormGroup;
  medicServices: string[];
  test: 'test';

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private servicesService: DoctorServicesService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.doctorService
      .getDoctorById('o2Jt7YS9zCWvBfDWY08X')
      .pipe(take(1))
      .subscribe((doctor: DoctorDTO) => {
        this.sampleForm = this.formBuilder.group({
          startDate: [null, Validators.required],
          startTime: [null, Validators.required],
          medicName: [doctor.doctorName, Validators.required],
          medService: [null, Validators.required],
        });
      });

    this.servicesService
      .getAllServices('o2Jt7YS9zCWvBfDWY08X')
      .pipe(take(1))
      .subscribe((docServices: DoctorServiceDTO) => {
        this.medicServices = docServices[0].services;
      });
  }

  onSubmit(): void {
    console.log(this.sampleForm.value);
  }

  onCancelForm(): void {
    this.activeModal.close();
  }
}
