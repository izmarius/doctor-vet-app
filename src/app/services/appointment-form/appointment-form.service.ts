import { take, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UserDto } from './../../data/modelDTO/user-dto';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentFormService {
filteredUsers: UserDto[];

constructor(private userService: UserService) { }

filterPacients(searchText: string, pacientName: string): void {
  searchText = pacientName;
  if (pacientName.length >= 2) {
    this.userService
      .getAllUsers()
      .pipe(take(1), debounceTime(200), distinctUntilChanged())
      .subscribe((usersList: UserDto[]) => {
         this.filteredUsers = usersList.filter(
          (user) =>
            user['name'].toLowerCase().indexOf(searchText.toLowerCase()) > -1
        );
      });
  }
}

}
