import {Component, OnDestroy, OnInit} from '@angular/core';
import {userCard} from '../../shared-data/Constants';
import {DoctorAppointmentsService} from '../../services/doc-appointment-service/doctor-appointments.service';
import {Subscription} from 'rxjs';
import {ICardData} from '../shared/user-card/user-card.component';
import {IDoctorsAppointmentsDTO} from "../../data/modelDTO/doctors-appointment-dto";

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent implements OnInit, OnDestroy {
  public userCardPlaceholder;
  public appointmentSubscription: Subscription;
  public appointmentMap = {};
  private appointmentList: IDoctorsAppointmentsDTO[];

  constructor(private doctorAppointmentService: DoctorAppointmentsService) {
  }

  ngOnInit(): void {
    this.userCardPlaceholder = userCard;
    this.doctorAppointmentService.getAllAppointments('o2Jt7YS9zCWvBfDWY08X').subscribe((appointments) => {
      // need to do this because we want to leave the card as a generic component
      this.appointmentList = appointments;
      this.setAppointmentMap(appointments);
    });
  }

  ngOnDestroy(): void {
    this.appointmentSubscription?.unsubscribe();
  }

  mapToCardData(appointment): ICardData {

    return {
      title: appointment.userName,
      values: [appointment.services, appointment.dateTime, appointment.animalData.name],
      buttonId: appointment.animalData.uid
    };
  }

  openModalWithAnimalDetails(animalId: string | number): void {
    const selectedAppointment = this.appointmentList.find(appointment => appointment.animalData.uid === animalId);
//get user and animal data
    // todo: to be implemented after crud for animals is done

  }

  setAppointmentMap(appointments: IDoctorsAppointmentsDTO[]): void {
    appointments.forEach((appointment) => {
      const date = appointment.dateTime.split(',')[0];
      if (this.appointmentMap[date]) {
        this.appointmentMap[date].push(appointment);
      } else {
        this.appointmentMap[date] = [];
        this.appointmentMap[date].push(appointment);
      }
    });
  }
}
