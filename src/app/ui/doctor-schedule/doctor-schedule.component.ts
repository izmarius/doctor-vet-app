import {Component, OnInit} from '@angular/core';
import {SCHEDULE_HEADER_TEXT} from '../../shared-data/Constants';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss']
})
export class DoctorScheduleComponent implements OnInit {
  headerContent;
  constructor() {
  }

  ngOnInit(): void {
    this.headerContent = {
      title: SCHEDULE_HEADER_TEXT.title,
      subtitle: SCHEDULE_HEADER_TEXT.subtitle,
      style: this.getHeaderStyle()
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
}
