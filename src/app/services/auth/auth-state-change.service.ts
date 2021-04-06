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
          this.afAuth.signOut();
          return;
        }
        this.userData = user;
        // delete -and create new?
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }
}
