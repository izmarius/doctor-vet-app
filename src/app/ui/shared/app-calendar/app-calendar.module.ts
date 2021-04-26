import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCalendarComponent } from './app-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory})
  ],
  exports: [AppCalendarComponent],
  declarations: [AppCalendarComponent]
})
export class AppCalendarModule { }
