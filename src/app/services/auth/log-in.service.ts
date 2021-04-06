import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatDialogRef} from '@angular/material/dialog';
import {LoginDialogComponent} from '../../ui/login-dialog/login-dialog.component';
import firebase from 'firebase';
import auth = firebase.auth;

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private afAuth: AngularFireAuth) {
  }

  logIn(email, password): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        // success message
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  loginWithGoogle(dialog: MatDialogRef<LoginDialogComponent>): Promise<void> {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then((user) => {
      if (user.user) {
        alert('logged');
        dialog.close();
      }
    }).catch((err) => {
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
