import { CALENDAR_DATA, DOCTORAPPOINTMENT_DATA, DOCTORAPPOINTMENTHEADER_DATA, DOCTORAPPOINTMENTSECTION_DATA } from './../../shared-data/Constants';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppoitmentFormComponent } from '../shared/appoitment-form/appoitment-form.component';
import { DoctorAppointmentsService } from 'src/app/services/doc-appointment-service/doctor-appointments.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.scss']
})
export class DoctorAppointmentComponent implements OnInit{
  headerTitle: string;
  headerSubTitle: string;
  sectionTitle: string;
  sectionSubTitle: string;
  appoitmentList: Observable<any>;
  calendar;
  doctorAppointmentPlaceHolder;
  doctorId = 'o2Jt7YS9zCWvBfDWY08X';

  constructor(private modalService: NgbModal, private doctorAppointmentService: DoctorAppointmentsService ) { }

  ngOnInit(): void {
    this.doctorAppointmentPlaceHolder = DOCTORAPPOINTMENT_DATA;
    this.calendar = CALENDAR_DATA;
    this.headerTitle = DOCTORAPPOINTMENTHEADER_DATA.title;
    this.headerSubTitle = DOCTORAPPOINTMENTHEADER_DATA.subTitle;
    this.sectionTitle = DOCTORAPPOINTMENTSECTION_DATA.title;
    this.sectionSubTitle = DOCTORAPPOINTMENTSECTION_DATA.subTitle;
    this.appoitmentList = this.doctorAppointmentService.getDcotorAppointments(this.doctorId);
  }

  openApointmentForm(): void {
    this.modalService.open(AppoitmentFormComponent);
  }

}
