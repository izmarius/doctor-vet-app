import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.scss']
})
export class DoctorAppointmentComponent implements OnInit {
  headerTitle: string;
  headerSubTitle: string;
  sectionTitle: string;
  sectionSubTitle: string;

  viewDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.headerTitle = 'Creeaza o programare';
    this.headerSubTitle = 'Rapid si eficient sau direct in calendar';
    this.sectionTitle = 'Section title here';
    this.sectionSubTitle = 'Section subtitle here';
  }

}
