import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user/user.service';
import { AuthStateChangeService } from './auth-state-change.service';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

constructor(
  private afAuth: AngularFireAuth,
  private userService: UserService,
  private authService: AuthStateChangeService
) { }

  logIn(email, password): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      this.userService.setUserData(userCredentials.user);
    })
    .catch((error) => {
      window.alert(error.message);
    });
  }

  forgotPassword(email): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email)
    .then(() => {
      window.alert('Password email sent, please check your inbox');
    })
    .catch((error) => {
      window.alert(error.message);
    });
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null && user.emailVerified === false) {
      return false;
    }
    return true;
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem('user'); // todo redirect to sign up/log in page, also add for doctor
      });
  }
}
