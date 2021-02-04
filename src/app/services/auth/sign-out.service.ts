import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SignOutService {

constructor(
  private afAuth: AngularFireAuth
) { }

  signOut(): Promise<void> {
    return this.afAuth.signOut()
    .then(() => {
      localStorage.removeItem('user'); // todo redirect to sign up/log in page, also add for doctor
    });
  }
}
