import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthStateChangeService {
  private userData: any; // logged in user data (user or doctor)

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        if (!user.emailVerified) {
          alert('Please verify your email');
          setTimeout(() => {
            this.afAuth.signOut();
          }, 1500);
          return;
        }
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.removeItem('user');
      }
    });
  }
}
