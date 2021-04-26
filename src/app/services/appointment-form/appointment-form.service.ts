import { take, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { UserDto } from './../../data/modelDTO/user-dto';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentFormService {

  constructor(private userService: UserService) { }

  filterPacients(searchText: string, pacientName: string): Observable<any> {
    searchText = pacientName;
    if (pacientName.length >= 2) {
      return this.userService.getAllUsers().pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map((usersList: UserDto[]) => {
          return usersList.filter(
            (user) =>
              user['name'].toLowerCase().indexOf(searchText.toLowerCase()) > -1
          );
        })
      );
    }
  }

}
