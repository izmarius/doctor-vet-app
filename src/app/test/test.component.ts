import {AnimalDto} from './../data/modelDTO/animal-dto';
import {UserDto} from './../data/modelDTO/user-dto';
import {Component, OnInit} from '@angular/core';

import {LogInService} from '../services/auth/log-in.service';
import {SignOutService} from '../services/auth/sign-out.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {SignUpService} from '../services/auth/sign-up.service';
import {DoctorAppointmentsService} from '../services/doc-appointment-service/doctor-appointments.service';
import {DoctorsAppointmentDTO} from '../data/modelDTO/doctors-appointment-dto';
import {AnimalUtilInfo} from '../data/modelDTO/animal-util-info';
import {UserService} from '../services/user/user.service';
import {DoctorServicesService} from '../services/doctor-service/doctor-services.service';
import {DoctorServiceDTO} from '../data/modelDTO/dorctor-service-DTO';
import {DoctorService} from '../services/doctor/doctor.service';
import {DaySchedule, DoctorDTO} from '../data/modelDTO/doctor-DTO';
import {AnimalService} from '../services/animal/animal.service';

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
    private userService: UserService,
    private doctorServicesService: DoctorServicesService,
    private doctorService: DoctorService,
    private animalService: AnimalService
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

    // this.userService.createUser(this.getUserDto());
    // this.userService.updateUserInfo(this.getUpdateUserDto(), 'b0Gkpo9nJJBrPL9gaHnD');
    // this.userService.deleteUser('t6Ra4nekUVYhbM4TXDcbKyK4wUJ2');
    // this.userService.getAllUsers().subscribe((res) => {
    //   console.log(res);
    // });
    // doctor service crud
    // this.doctorServicesService.getAllServices('o2Jt7YS9zCWvBfDWY08X');
    // this.doctorServicesService.createService(this.getServiceDTO(), 'o2Jt7YS9zCWvBfDWY08X');
    // this.doctorServicesService.deleteService('riGp0JSH3y67v4nciufy', 'o2Jt7YS9zCWvBfDWY08X');

    // doctor crud
    // this.doctorService.getAllDoctors();
    // this.doctorService.createDoctor(this.getDoctorDTO());
    // this.doctorService.updateDoctorInfo(this.getDoctorDTOForUpdate(), 'vypbGbOTDW6KcsLSZbeK');
    // this.doctorService.deleteDoctor( 'ZXVARyYsk9QBO138Y02J');

    // animal crud
    // this.animalService.addAnimalToUser(this.getAnimalDto(), 'TP8JUTLKjNSwKpcvAIYFk25ngy82');

    // this.animalService.getAnimalsMedicalHistoryDocs('36pxiCX2WzLqLRcqTqXT', '3NaCJrnyv7lMkXcmQUPM').subscribe((res) => {
    //   res.docs.map(doc => {
    //     console.log(doc.data());
    //   });
    // });
  }


  getUpdatedDoctorsAppointment(): DoctorsAppointmentDTO {
    const app = new DoctorsAppointmentDTO();
    const animalInfo = new AnimalUtilInfo();
    animalInfo.setName('Marius').setUid('123');
    return app.setAnimal(animalInfo)
      .setLocation('Str. dsaads, bl5, nr. 22, app. 12')
      .setUserId('3NaCJrnyv7lMkXcmQUPM')
      .setServices('Control')
      .setUserName('Ion');
  }

  getDoctorsAppointment(): DoctorsAppointmentDTO[] {
    const app = new DoctorsAppointmentDTO();
    const animalInfo = new AnimalUtilInfo();
    animalInfo.setName('Alex')
      .setUid('3214342');
    app.setAnimal(animalInfo)
      .setDateTime(new Date().toLocaleString())
      .setLocation('Str. Pasteour, bl5, nr. 22, app. 12')
      .setUserId('3NaCJrnyv7lMkXcmQUPM');
    return [app];
  }

  getUserDto(): UserDto {
    const user = new UserDto();
    user.setUserCity('Cluj');
    user.setUserEmail('testuser1@mail.com');
    user.setUserName('Marius');
    user.setUserPhone('07412345678');
    return user;
  }

  getUpdateUserDto(): UserDto {
    const user = new UserDto();
    user.setUserCity('Cluj');
    user.setUserEmail('testuser2@mail.com');
    user.setUserName('Ionut');
    user.setUserPhone('0740123456');
    return user;
  }

  getServiceDTO(): DoctorServiceDTO {
    const service = new DoctorServiceDTO();
    service.services = ['imagistica', 'surgery', 'hair treatment'];
    service.id = 'Q6FArUYmOOWhr7MFf5j9';
    return service;
  }

  getDoctorDTO(): DoctorDTO {
    const doctor = new DoctorDTO();
    doctor.clinicName = 'a';
    doctor.clinicLogo = 's';
    doctor.doctorName = 'b';
    doctor.location = 'c';
    doctor.locationGMapsUrl = 's';
    doctor.photoCertificate = 'd';
    doctor.schedule = this.getSchedule();
    return doctor;
  }

  getDoctorDTOForUpdate(): DoctorDTO {
    const doctor = new DoctorDTO();
    doctor.clinicName = 'dsasdsaads';
    doctor.clinicLogo = 's';
    doctor.doctorName = 'b';
    doctor.location = 'c';
    doctor.locationGMapsUrl = 's';
    doctor.photoCertificate = 'd';
    doctor.schedule = this.getSchedule();
    return doctor;
  }

  getSchedule(): DaySchedule[] {
    const schedule = [];
    const monday = new DaySchedule('monday', '08', '11');
    const tuesday = new DaySchedule('tuesday', '08', '11');
    schedule.push(monday);
    schedule.push(tuesday);
    return schedule;
  }

  getAnimalDto(): AnimalDto {
    const animal = new AnimalDto();
    animal.setAnimalAge('2');
    animal.setAnimalBirthDay('01May2019');
    animal.setAnimalBloodType('A2');
    animal.setAnimalName('Balenciaga');
    animal.setAnimalWeight('18kg');
    return animal;
  }
}
