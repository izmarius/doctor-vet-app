import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-app-calendar',
  templateUrl: './app-calendar.component.html',
  styleUrls: ['./app-calendar.component.scss'],
})
export class AppCalendarComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen = false;
  @Input() events: [];
  @Input() calendarPlaceHolder;

  setView(view: CalendarView): void {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
