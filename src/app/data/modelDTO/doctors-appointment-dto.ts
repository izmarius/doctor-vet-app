import {AnimalUtilInfo} from './animal-util-info';

export class DoctorsAppointmentDTO {
  private id: string;
  private animalData: AnimalUtilInfo;
  private dateTime: string;
  private location: string;
  private userId: string;


  getId(): string {
    return this.id;
  }

  setId(value: string): DoctorsAppointmentDTO {
    this.id = value;
    return this;
  }

  getAnimals(): AnimalUtilInfo {
    return this.animalData;
  }

  setAnimals(value: AnimalUtilInfo): DoctorsAppointmentDTO {
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
}
