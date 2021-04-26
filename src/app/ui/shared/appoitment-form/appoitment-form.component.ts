import { DateUtilsService } from './../../../data/utils/date-utils.service';
import { AppointmentFormService } from './../../../services/appointment-form/appointment-form.service';
import { APPOINTMENTFORM_DATA } from './../../../shared-data/Constants';
import { AnimalUtilInfo } from './../../../data/modelDTO/animal-util-info';
import { DoctorAppointmentsService } from './../../../services/doc-appointment-service/doctor-appointments.service';
import { DoctorsAppointmentDTO } from 'src/app/data/modelDTO/doctors-appointment-dto';
import { UserService } from './../../../services/user/user.service';
import { DoctorServiceDTO } from './../../../data/modelDTO/dorctor-service-DTO';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
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
export class AppoitmentFormComponent implements OnInit, AfterViewInit {
  sampleForm = new FormGroup({
    startDate: new FormControl(null, Validators.required),
    startTime: new FormControl(null, Validators.required),
    medicId: new FormControl(null, Validators.required),
    medicName: new FormControl(null, Validators.required),
    medService: new FormControl(null, Validators.required),
    medLocation: new FormControl(null, Validators.required),
    pacientName: new FormControl(null, Validators.required),
    pacientId: new FormControl(null, Validators.required),
    pacientAnimal: new FormControl(null, Validators.required),
  });
  medicServices: Observable<any>;
  formTitle: string;
  pacientName: string;
  users: Observable<any>;
  animals: AnimalUtilInfo[];
  doctorAppointment: DoctorsAppointmentDTO;
  appoinementFormPlaceHolder;
  pacientSelected: boolean;
  focusedPacient: boolean;
  doctorId: string;
  @ViewChild('pacientList') pacientList: any;
  @ViewChild('inputPacientName') inputPacientName: any;
  @ViewChild('animalList') animalList: any;

  constructor(
    private doctorService: DoctorService,
    private servicesService: DoctorServicesService,
    private activeModal: NgbActiveModal,
    private doctorAppointmentService: DoctorAppointmentsService,
    private appointmentFormService: AppointmentFormService,
    private dateUtilsService: DateUtilsService
  ) {}

  ngOnInit(): void {
    this.appoinementFormPlaceHolder = APPOINTMENTFORM_DATA;
    this.formTitle = APPOINTMENTFORM_DATA.title;
    this.pacientName = '';
    this.focusedPacient = false;
    this.doctorId = 'o2Jt7YS9zCWvBfDWY08X';
  }

  ngAfterViewInit(): void {
    this.animalList.nativeElement.classList.add('hidden');

    this.doctorService
    .getDoctorById(this.doctorId)
    .pipe(take(1))
    .subscribe((medic: DoctorDTO) => {
      this.sampleForm.patchValue({
        medicName: medic.doctorName,
        medLocation: medic.location,
        medicId: this.doctorId,
      });
    });

    this.medicServices = this.servicesService.getDoctorServices(this.doctorId);
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
        this.dateUtilsService.formatDateAndTime(
          this.sampleForm.value.startDate,
          this.sampleForm.value.startTime
        )
      )
      .setAnimal(newAnimalInfo)
      .setLocation(this.sampleForm.value.medLocation);

    if (!this.sampleForm.invalid) {
      this.doctorAppointmentService.createAppointment(
        [newDoctorAppointment],
        this.sampleForm.value.medicId
      );
    }

    this.activeModal.close();
  }

  onCancelForm(): void {
    this.activeModal.close();
  }

  filterPacients(searchText: string): void {
    this.users = this.appointmentFormService.filterPacients(searchText, this.pacientName);
  }

  onSeclectPacient(selectedPacient: UserDto): void {
    this.focusedPacient = false;
    this.pacientList.nativeElement.classList.add('hidden');
    this.sampleForm.patchValue({
      pacientName: selectedPacient['name'],
      pacientId: selectedPacient['id'],
    });
    this.animals = selectedPacient['animals'];
    this.animalList.nativeElement.classList.remove('hidden');
  }

  onFocusPacient(): void {
    this.focusedPacient = true;
    if (this.pacientList.nativeElement.classList.contains('hidden')) {
      this.pacientList.nativeElement.classList.remove('hidden');
    }
    this.animalList.nativeElement.classList.add('hidden');
  }

}
