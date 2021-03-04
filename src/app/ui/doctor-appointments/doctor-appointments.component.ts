import {Component, OnDestroy, OnInit} from '@angular/core';
import {userCard} from '../../shared-data/Constants';
import {DoctorAppointmentsService} from '../../services/doc-appointment-service/doctor-appointments.service';
import {Subscription} from 'rxjs';
import {DoctorsAppointmentDTO} from '../../data/modelDTO/doctors-appointment-dto';
import {ICardData} from "../shared/user-card/user-card.component";

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent implements OnInit, OnDestroy {
  public userCardPlaceholder;
  public appointmentSubscription: Subscription;
  public appointmentList: DoctorsAppointmentDTO[];

  constructor(private doctorAppointmentService: DoctorAppointmentsService) {
  }

  ngOnInit(): void {
    this.userCardPlaceholder = userCard;
    this.doctorAppointmentService.getAllAppointments('o2Jt7YS9zCWvBfDWY08X').subscribe((appointments) => {
      this.appointmentList = appointments;
    });
  }

  mapToCardData(appointment): ICardData {

    return {
      title: appointment.userName,
      values: [appointment.services, appointment.dateTime, appointment.animalData.name],
      buttonId: appointment.animalData.uid
    };
  }

  ngOnDestroy(): void {
    this.appointmentSubscription?.unsubscribe();
  }

}
