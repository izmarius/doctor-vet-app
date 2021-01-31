import { UserDto } from './../../data/modelDTO/user-dto';
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
    const userRef: AngularFirestoreDocument<UserDto> = this.afs.doc(`user/${user.uid}`);
    const userData = new UserDto();
    userData.setUserEmail(user.email);
    return userRef.set(JSON.parse(JSON.stringify(userData)) , { // firestore does not accept custom objects
      merge: true
    });
  }
}
