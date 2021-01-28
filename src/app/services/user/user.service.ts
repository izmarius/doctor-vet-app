import { User } from './../../shared/user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private afs: AngularFirestore
  ) { }

  setUserData(user): Promise<void> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);
    const userData: User = {
      city: '',
      email: user.email,
      name: '',
      phone: '',
      photo: ''
    };
    console.log(userData);
    return userRef.set(userData, {
      merge: true
    });
  }
}
