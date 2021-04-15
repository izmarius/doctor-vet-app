import {Component, OnInit} from '@angular/core';
import {SCHEDULE_HEADER_TEXT, DAYS_OF_WEEK, DAYS_OF_WEEK_MAP} from '../../shared-data/Constants';
import {DoctorService} from '../../services/doctor/doctor.service';
import {IDaySchedule} from '../../data/modelDTO/doctor-DTO';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss']
})
export class DoctorScheduleComponent implements OnInit {
  private storedDoctor;
  headerContent;
  daysOfWeekMap = DAYS_OF_WEEK_MAP;
  weekDaysList: any[] = [];
  scheduleBtnText: string;
  isSaveButtonDisabled = false;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit(): void {
    this.storedDoctor = JSON.parse(localStorage.getItem('user'));
    this.scheduleBtnText = SCHEDULE_HEADER_TEXT.scheduleButtonText;
    this.weekDaysList = DAYS_OF_WEEK;
    this.headerContent = {
      title: SCHEDULE_HEADER_TEXT.title,
      subtitle: SCHEDULE_HEADER_TEXT.subtitle,
      style: this.getHeaderStyle()
    };
  }

  getAndSetDay(dayPayload: IDaySchedule): void {
    for (const engDay in this.daysOfWeekMap) {
      if (this.daysOfWeekMap[engDay] === dayPayload.day) {
        this.storedDoctor.schedule[engDay] = dayPayload;
        return;
      }
    }
  }

  getHeaderStyle(): any {
    return {
      headerContainer: {
        height: '300px',
        background: '#ffdc4d',
      },
      headerContent: {
        height: '180px'
      }
    };
  }

  saveSchedule(): void {
    if (!this.storedDoctor.schedule && Object.keys(this.storedDoctor.schedule).length === 0) {
      return;
    }
    this.doctorService.updateDoctorInfo({schedule: this.storedDoctor.schedule}, this.storedDoctor.id)
      .then(() => {
        localStorage.setItem('user', JSON.stringify(this.storedDoctor));
        console.log('service updated');
      }, (error) => {
        console.log('Error updating service', error);
      });
  }

}
