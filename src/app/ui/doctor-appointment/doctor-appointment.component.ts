import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { CALENDAR_DATA, DOCTORAPPOINTMENT_DATA, DOCTORAPPOINTMENTHEADER_DATA, DOCTORAPPOINTMENTSECTION_DATA } from './../../shared-data/Constants';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppoitmentFormComponent } from '../shared/appoitment-form/appoitment-form.component';
import { DoctorAppointmentsService } from 'src/app/services/doc-appointment-service/doctor-appointments.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.scss']
})
export class DoctorAppointmentComponent implements OnInit, AfterViewInit {
  headerTitle: string;
  headerSubTitle: string;
  sectionTitle: string;
  sectionSubTitle: string;
  appoitmentList: Observable<any>;
  calendar;
  doctorAppointmentPlaceHolder;
  doctorId: string;

  constructor(private modalService: NgbModal, private doctorAppointmentService: DoctorAppointmentsService, private doctorService: DoctorService ) { }

  ngOnInit(): void {
    this.doctorAppointmentPlaceHolder = DOCTORAPPOINTMENT_DATA;
    this.calendar = CALENDAR_DATA;
    this.headerTitle = DOCTORAPPOINTMENTHEADER_DATA.title;
    this.headerSubTitle = DOCTORAPPOINTMENTHEADER_DATA.subTitle;
    this.sectionTitle = DOCTORAPPOINTMENTSECTION_DATA.title;
    this.sectionSubTitle = DOCTORAPPOINTMENTSECTION_DATA.subTitle;
    this.doctorId = this.doctorService.getLoggedInDctorId();
  }

  ngAfterViewInit(): void {
    this.appoitmentList = this.doctorAppointmentService.getDcotorAppointments(this.doctorId);
  }

  openApointmentForm(): void {
    this.modalService.open(AppoitmentFormComponent);
  }

}
