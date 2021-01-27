import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user/user.service';
import { AuthStateChangeService } from './auth-state-change.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private authService: AuthStateChangeService
  ) { }

  signUp(email, password): void {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      this.userService.setUserData(userCredentials.user);
    })
    .catch((error) => {
      window.alert(error.message);
    });
  }
}
