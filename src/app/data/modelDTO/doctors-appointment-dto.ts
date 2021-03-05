import {AnimalUtilInfo} from './animal-util-info';

export class DoctorsAppointmentDTO {
  private id: string;
  private animalData: AnimalUtilInfo;
  private dateTime: string;
  private location: string;
  private userId: string;
  private userName: string;
  private services: string;


  getId(): string {
    return this.id;
  }

  setId(value: string): DoctorsAppointmentDTO {
    this.id = value;
    return this;
  }

  getAnimal(): AnimalUtilInfo {
    return this.animalData;
  }

  setAnimal(value: AnimalUtilInfo): DoctorsAppointmentDTO {
    this.animalData = value;
    return this;
  }

  getDateTime(): string {
    return this.dateTime;
  }

  setDateTime(value: string): DoctorsAppointmentDTO {
    this.dateTime = value;
    return this;
  }

  getLocation(): string {
    return this.location;
  }

  setLocation(value: string): DoctorsAppointmentDTO {
    this.location = value;
    return this;
  }

  getUserId(): string {
    return this.userId;
  }

  setUserId(value: string): DoctorsAppointmentDTO {
    this.userId = value;
    return this;
  }

  getUserName(): string {
    return this.userName;
  }

  setUserName(value: string): DoctorsAppointmentDTO {
    this.userName = value;
    return this;
  }

  getServices(): string {
    return this.services;
  }

  setServices(value: string): DoctorsAppointmentDTO {
    this.services = value;
    return this;
  }
}
