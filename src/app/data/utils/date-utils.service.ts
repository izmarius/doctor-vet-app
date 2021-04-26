import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

constructor() { }

formatDateAndTime(date: any, time: any): string {
  let hour = time.hour;
  let month = date.month;
  if (hour <= 9) {
    hour = '0'.concat(hour);
  }
  if (month <= 9) {
    month = '0'.concat(month);
  }
  return (
    date.year + '-' + month + '-' + date.day + 'T' + hour + ':' + time.minute + ':' + '0' + time.second
  );
}

}
