import {Component, OnInit} from '@angular/core';
import {SCHEDULE_HEADER_TEXT, DAYS_OF_WEEK, DAYS_OF_WEEK_MAP} from '../../shared-data/Constants';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss']
})
export class DoctorScheduleComponent implements OnInit {
  headerContent;
  // interface
  schedule = DAYS_OF_WEEK_MAP;
  schedulePayload = {};
  // create interface?
  weekDaysList: any[] = [];
  scheduleBtnText: string;

  constructor() {
  }

  ngOnInit(): void {
    this.scheduleBtnText = SCHEDULE_HEADER_TEXT.scheduleButtonText;
    this.weekDaysList = DAYS_OF_WEEK;
    this.headerContent = {
      title: SCHEDULE_HEADER_TEXT.title,
      subtitle: SCHEDULE_HEADER_TEXT.subtitle,
      style: this.getHeaderStyle()
    };
  }

  getAndSetDay(dayPayload): void {
    for (const enDay in this.schedule) {
      if (this.schedule[enDay] === dayPayload.day) {
        this.schedulePayload[enDay] = dayPayload;
        console.log(this.schedulePayload);
        return;
      }
    }
  }

  getHeaderStyle(): any {
    return {
      headerContainer: {
        height: '300px',
        background: '#f2f2f2'
      },
      headerContent: {
        height: '180px'
      }
    };
  }

  getScheduleStatus(): boolean {
    if (this.weekDaysList.length === 0) {
      return false;
    }
    return true;
  }

  saveSchedule(): void {

  }
}
