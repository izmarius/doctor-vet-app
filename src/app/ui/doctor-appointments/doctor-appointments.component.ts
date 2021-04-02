import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {userCard} from '../../shared-data/Constants';
import {DoctorAppointmentsService} from '../../services/doc-appointment-service/doctor-appointments.service';
import {Subscription} from 'rxjs';
import {ICardData} from '../shared/user-card/user-card.component';
import {IDoctorsAppointmentsDTO} from '../../data/modelDTO/doctors-appointment-dto';
import {MatDialog} from '@angular/material/dialog';
import {UserAnimalDataDialogComponent} from '../user-animal-data-dialog/user-animal-data-dialog.component';
import {AnimalService} from '../../services/animal/animal.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent implements OnInit, OnDestroy {
  private APPOINTMENT_SUB: Subscription;
  private appointmentList: IDoctorsAppointmentsDTO[];
  @ViewChild('cardComponent') private cardComponent;

  public appointmentMap = {};
  public userCardPlaceholder;

  constructor(private doctorAppointmentService: DoctorAppointmentsService,
              private dialog: MatDialog,
              private animalService: AnimalService) {
  }

  ngOnInit(): void {
    this.userCardPlaceholder = userCard;
    this.APPOINTMENT_SUB = this.doctorAppointmentService
      .getAllAppointments('o2Jt7YS9zCWvBfDWY08X')
      .subscribe((appointments) => {
        // need to do this because we want to leave the card as a generic component
        this.appointmentList = appointments;
        this.setAppointmentMap(appointments);
      });
  }

  ngOnDestroy(): void {
    this.APPOINTMENT_SUB?.unsubscribe();
  }

  mapToCardData(appointment): ICardData {
    return {
      title: appointment.userName,
      values: [appointment.services, appointment.dateTime, appointment.animalData.name],
      buttonId: appointment.animalData.uid
    };
  }

  openModalWithAnimalDetails(animalId: string | number): void {
    // we do this because we want to let the card to be generic
    const selectedAppointment: IDoctorsAppointmentsDTO = this.appointmentList.find(appointment => appointment.animalData.uid === animalId);
    const userAnimalObs$ = this.animalService.getAnimalDataAndMedicalHistoryByAnimalId(animalId, selectedAppointment.userId);
    const dialogRef = this.dialog.open(UserAnimalDataDialogComponent, {
      width: '50%',
      height: '45.625rem',
      data: {
        userAnimalDataObs: userAnimalObs$,
        userId: selectedAppointment.userId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
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
