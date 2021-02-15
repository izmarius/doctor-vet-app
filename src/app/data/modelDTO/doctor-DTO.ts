export class DoctorDTO {
  public clinicLogo: string;
  public clinicName: string;
  public doctorName: string;
  public location: string;
  public locationGMapsUrl: string;
  public photoCertificate: string;
  public schedule: DaySchedule[];
}

export class DaySchedule {
  day: string;
  startHour: string;
  endHour: string;

  constructor(day: string, startHour: string, endHour: string) {
    this.day = day;
    this.startHour = startHour;
    this.endHour = endHour;
  }
}
