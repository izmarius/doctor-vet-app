import { calendarData, doctorAppointmentData, doctorAppointmentHeader } from './../../shared-data/Constants';
import { CalendarEvent } from 'angular-calendar';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DoctorsAppointmentDTO } from 'src/app/data/modelDTO/doctors-appointment-dto';
import { DoctorAppointmentsService } from 'src/app/services/doc-appointment-service/doctor-appointments.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppoitmentFormComponent } from '../shared/appoitment-form/appoitment-form.component';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.scss']
})
export class DoctorAppointmentComponent implements OnInit, OnDestroy {
  headerTitle: string;
  headerSubTitle: string;
  sectionTitle: string;
  sectionSubTitle: string;
  appoitmentList: CalendarEvent[] = [];
  appointmentSubscription: Subscription;
  calendar;
  doctorAppointmentPlaceHolder;

  constructor(private doctorAppoitmentService: DoctorAppointmentsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.doctorAppointmentPlaceHolder = doctorAppointmentData;
    this.calendar = calendarData;
    this.headerTitle = doctorAppointmentHeader.title;
    this.headerSubTitle = doctorAppointmentHeader.subTitle;
    this.sectionTitle = 'Section title here';
    this.sectionSubTitle = 'Section subtitle here';
    this.doctorAppoitmentService.getAllAppointments('o2Jt7YS9zCWvBfDWY08X').subscribe((appoitments) => {
      appoitments.forEach((appointment) => {
        this.appoitmentList = [
          ...this.appoitmentList,
          {
            start: new Date(appointment['dateTime']), // cant use DTO methods, why??
            title: appointment['services']
                  + ', '
                  + new Date(appointment['dateTime']).toLocaleTimeString('ro')
                  + ', '
                  + 'Pacient: '
                  + appointment['userName']
                  + ', '
                  + 'Animal: '
                  + appointment['animalData']['name']
          }
        ];
      });
    });
  }

  ngOnDestroy(): void {
    this.appointmentSubscription?.unsubscribe();
  }

  openApointmentForm(): void {
    this.modalService.open(AppoitmentFormComponent);
  }

}
