import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SCHEDULE_COMPONENT_ERROR_MSG} from '../../../shared-data/Constants';

@Component({
  selector: 'app-schedule-setter',
  templateUrl: './schedule-setter.component.html',
  styleUrls: ['./schedule-setter.component.scss']
})
export class ScheduleSetterComponent implements OnInit {
  @Output() checkEmitter = new EventEmitter();
  @Input() day: string;
  endHour: string = 10;
  endMinute: string = 10;
  isChecked = false;
  startHour: string = 10;
  startMinute: string = 10;
  isErrorMessageShown: boolean;
  errorMessage: string;

  constructor() {
  }

  ngOnInit(): void {
    this.errorMessage = SCHEDULE_COMPONENT_ERROR_MSG;
  }

  setAndEmitDayInfo(): void {

    // todo: end time > start time!!! validation
    if (this.isChecked && this.areDayHoursInvalid()) {
      this.isErrorMessageShown = false;
      return;
    } else if (this.areDayHoursInvalid()) {
      this.isErrorMessageShown = true;
      return;
    }
    this.isErrorMessageShown = false;

    const dayPayload = {
      isChecked: !this.isChecked,
      startTime: this.startHour + ':' + this.startMinute,
      endTime: this.endMinute + ':' + this.endMinute,
      day: this.day,
    };
    this.checkEmitter.emit(dayPayload);
  }

  areDayHoursInvalid(): boolean {
    return !this.startMinute || !this.endMinute || !this.startHour || !this.endHour;
  }

  setOutOfOfficeDay(): void {

  }
}
