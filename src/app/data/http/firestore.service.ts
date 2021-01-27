import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';
import OrderByDirection = firebase.firestore.OrderByDirection;

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {
  }

  // get
  getCollection(collection: string) {
    return this.firestore.collection(collection).valueChanges();
  }

  getCollectionOrdered(collection: string, orderField: string, orderDirection: OrderByDirection = 'asc') {
    return this.firestore.collection(collection, ref => ref.orderBy('order', orderDirection).limit(10)).valueChanges();
  }

  getDocById(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).get();
  }

  getCollectionByWhereClause(collection: string, key, operator, value) {
    return this.firestore.collection(collection, ref => ref.where(key, operator, value)).valueChanges();
  }

  // save
  saveDocumentByAutoId(collection: string, data = null) {
    return this.firestore.collection(collection).doc(this.firestore.createId()).set(Object.assign({}, data));
  }

  saveDocumentById(collection: string, id: string, data = null) {
    return this.firestore.collection(collection).doc(id).set(data);
  }

  // update

  updateDocumentById(collection: string, id: string, data) {
    return this.firestore.collection(collection).doc(id).update(data);
  }

  // delete
  deleteDocById(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).delete();
  }

}
