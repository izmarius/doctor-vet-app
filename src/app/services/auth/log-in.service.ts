import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatDialogRef} from '@angular/material/dialog';
import {LoginDialogComponent} from '../../ui/login-dialog/login-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private afAuth: AngularFireAuth) {
  }

  logIn(email, password, dialogRef: MatDialogRef<LoginDialogComponent>): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        if (!userCredentials.user.emailVerified) {
          this.signOut();
          return;
        }
        alert('Login success');
        dialogRef.close(true);
        // success message
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return !(user === null || user.emailVerified === false);
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem('user');
      });
  }
}
