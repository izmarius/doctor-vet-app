import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user/user.service';
import { AuthStateChangeService } from './auth-state-change.service';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private authService: AuthStateChangeService
  ) { }

  signUp(email, password): Promise<void> { // todo: add check for user or doctor at signup
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      this.sendVerificationEmail(userCredentials.user);
      this.userService.setUserData(userCredentials.user);
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
      this.userService.setUserData(userCredentials.user);
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
