import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from '../user/user.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import {MatDialogRef} from '@angular/material/dialog';
import {SignupDialogComponent} from '../../ui/signup-dialog/signup-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService
  ) {
  }

  signUp(email, password, dialogRef: MatDialogRef<SignupDialogComponent>): Promise<void> { // todo: add check for user or doctor at signup
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        this.sendVerificationEmail(userCredentials.user);
        this.userService.setUserData(userCredentials.user);
        dialogRef.close();
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  googleSignup(): Promise<void> {
    return this.providerSignUp(new firebase.auth.GoogleAuthProvider());
  }

  private providerSignUp(provider): Promise<void> {
    return this.afAuth.signInWithPopup(provider)
      .then((userCredentials) => { // todo: redirect to dashboard
        // todo:  sign up save user as a doctor or normal user - also grant rights to them
        // this.userService.setUserData(userCredentials.user);
        alert('success');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  private sendVerificationEmail(user): Promise<void> {
    return user.sendEmailVerification()
      .then(() => {
        window.alert('Validation email sent!'); // todo: change to romanian and add message into global messages
      });
  }
}
