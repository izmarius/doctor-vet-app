import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-app-calendar',
  templateUrl: './app-calendar.component.html',
  styleUrls: ['./app-calendar.component.scss']
})
export class AppCalendarComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  @Input() events: [];

  setView(view: CalendarView): void {
    this.view = view;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
