import {LogInService} from './../services/auth/log-in.service';
import {SignOutService} from './../services/auth/sign-out.service';
import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {SignUpService} from '../services/auth/sign-up.service';
import {DoctorAppointmentsService} from '../services/doc-appointment-service/doctor-appointments.service';
import {DoctorsAppointmentDTO} from '../data/modelDTO/doctors-appointment-dto';
import {AnimalUtilInfo} from '../data/modelDTO/animal-util-info';
import {DoctorServicesService} from '../services/doctor-service/doctor-services.service';
import {DoctorServiceDTO} from "../data/modelDTO/DoctorService";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
    public signUpService: SignUpService,
    private appointmentsService: DoctorAppointmentsService,
    public signOutService: SignOutService,
    public logInService: LogInService,
    private doctorServicesService: DoctorServicesService
  ) {
  }

  ngOnInit(): void {
    // todo: maybe take the doctor from url?
    // doctor appointment crud
    // this.appointmentsService.getAllAppointments('o2Jt7YS9zCWvBfDWY08X');
    // this.appointmentsService.getAppointmentById('O71K1OpMmrF7OWqchrlh', 'o2Jt7YS9zCWvBfDWY08X');
    // this.appointmentsService.createAppointment(this.getDoctorsAppointment(), 'o2Jt7YS9zCWvBfDWY08X');
    // this.appointmentsService.deleteAppointment('8igbwSCLeaR6AW4ocbKR', 'o2Jt7YS9zCWvBfDWY08X');
    // this.appointmentsService.updateAppointment(this.getUpdatedDoctorsAppointment(), '7M7JRKmBlg8CxVveGOvW', 'o2Jt7YS9zCWvBfDWY08X');

    // doctor service crud
    // this.doctorServicesService.getAllServices('o2Jt7YS9zCWvBfDWY08X');
    // this.doctorServicesService.createService(this.getServiceDTO(), 'o2Jt7YS9zCWvBfDWY08X');
    // this.doctorServicesService.deleteService('riGp0JSH3y67v4nciufy', 'o2Jt7YS9zCWvBfDWY08X');

    // doctor crud
  }

  getUpdatedDoctorsAppointment(): DoctorsAppointmentDTO {
    const app = new DoctorsAppointmentDTO();
    const animalInfo = new AnimalUtilInfo();
    animalInfo.setName('Marius').setUid('123');
    return app.setAnimals(animalInfo)
      .setDateTime('')
      .setLocation('Str. dsaads, bl5, nr. 22, app. 12')
      .setUserId('3NaCJrnyv7lMkXcmQUPM');
  }

  getDoctorsAppointment(): DoctorsAppointmentDTO {
    const app = new DoctorsAppointmentDTO();
    const animalInfo = new AnimalUtilInfo();
    animalInfo.setName('Marius').setUid('123');
    return app.setAnimals(animalInfo)
      .setDateTime(new Date().toLocaleString())
      .setLocation('Str. Pasteour, bl5, nr. 22, app. 12')
      .setUserId('3NaCJrnyv7lMkXcmQUPM');
  }

  getServiceDTO(): DoctorServiceDTO {
    const service = new DoctorServiceDTO();
    service.services = ['imagistica', 'surgery', 'hair treatment'];
    service.id = 'Q6FArUYmOOWhr7MFf5j9';
    return service;
  }
}
