import { AppointmentFormService } from './../../../services/appointment-form/appointment-form.service';
import { appointmentFormData } from './../../../shared-data/Constants';
import { AnimalUtilInfo } from './../../../data/modelDTO/animal-util-info';
import { DoctorAppointmentsService } from './../../../services/doc-appointment-service/doctor-appointments.service';
import { DoctorsAppointmentDTO } from 'src/app/data/modelDTO/doctors-appointment-dto';
import { UserService } from './../../../services/user/user.service';
import { DoctorServiceDTO } from './../../../data/modelDTO/dorctor-service-DTO';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { DoctorDTO } from 'src/app/data/modelDTO/doctor-DTO';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { DoctorServicesService } from 'src/app/services/doctor-service/doctor-services.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDto } from 'src/app/data/modelDTO/user-dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appoitment-form',
  templateUrl: './appoitment-form.component.html',
  styleUrls: ['./appoitment-form.component.scss'],
})
export class AppoitmentFormComponent implements OnInit {
  sampleForm = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    startTime: new FormControl(null, Validators.required),
    medicId: new FormControl(null, Validators.required),
    medicName: new FormControl(null, Validators.required),
    medService: new FormControl(null, Validators.required),
    medLocation: new FormControl(null, Validators.required),
    pacientName: new FormControl('', Validators.required),
    pacientId: new FormControl('', Validators.required),
    pacientAnimal: new FormControl({}, Validators.required),
  });
  medicServices: string[];
  formTitle: string;
  pacientName: string;
  users: Observable<any>;
  animals: AnimalUtilInfo[];
  doctorAppointment: DoctorsAppointmentDTO;
  appoinementFormPlaceHolder;
  @ViewChild('pacientList') pacientList: any;
  @ViewChild('inputPacientName') inputPacientName: any;

  constructor(
    private doctorService: DoctorService,
    private servicesService: DoctorServicesService,
    private activeModal: NgbActiveModal,
    private userService: UserService,
    private doctorAppointmentService: DoctorAppointmentsService,
    private appointmentFormService: AppointmentFormService
  ) {}

  ngOnInit(): void {
    this.appoinementFormPlaceHolder = appointmentFormData;
    this.formTitle = appointmentFormData.title;
    this.pacientName = '';

    this.doctorService
      .getDoctorById('o2Jt7YS9zCWvBfDWY08X')
      .pipe(take(1))
      .subscribe((medic: DoctorDTO) => {
        this.sampleForm.patchValue({
          medicName: medic.doctorName,
          medLocation: medic.location,
          medicId: 'o2Jt7YS9zCWvBfDWY08X',
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
    const newAnimalInfo = new AnimalUtilInfo()
      .setName(this.sampleForm.value.pacientAnimal.animalName)
      .setUid(this.sampleForm.value.pacientAnimal.animalId);

    const newDoctorAppointment = new DoctorsAppointmentDTO()
      .setUserName(this.sampleForm.value.pacientName)
      .setUserId(this.sampleForm.value.pacientId)
      .setServices(this.sampleForm.value.medService)
      .setDateTime(
        this.formatDateAndTime(
          this.sampleForm.value.startDate,
          this.sampleForm.value.startTime
        )
      )
      .setAnimal(newAnimalInfo)
      .setLocation(this.sampleForm.value.medLocation);

    this.doctorAppointmentService.createAppointment(
      [newDoctorAppointment],
      this.sampleForm.value.medicId
    );
    this.activeModal.close();
  }

  onCancelForm(): void {
    this.activeModal.close();
  }

  filterPacients(searchText: string): void {
    this.users = this.appointmentFormService.filterPacients(searchText, this.pacientName);
  }

  onSeclectPacient(selectedPacient: UserDto): void {
    this.pacientList.nativeElement.classList.add('hidden');
    this.sampleForm.patchValue({
      pacientName: selectedPacient['name'],
      pacientId: selectedPacient['id'],
    });
    this.animals = selectedPacient['animals'];
  }

  formatDateAndTime(date: any, time: any): string {
    let hour = time.hour;
    let month = date.month;
    if (hour <= 9) {
      hour = '0'.concat(hour);
    }
    if (month <= 9) {
      month = '0'.concat(month);
    }
    return (
      date.year +
      '-' +
      month +
      '-' +
      date.day +
      'T' +
      hour +
      ':' +
      time.minute +
      ':' +
      '0' +
      time.second
    );
  }
}
