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

  setUserData(user): void {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      name: user.name,
      phone: user.phone,
      photo: user.photo,
      city: user.city,
      email: user.email
    };
    userRef.set(userData, {
      merge: true
    });
  }
}
