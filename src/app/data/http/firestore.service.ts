import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';
import OrderByDirection = firebase.firestore.OrderByDirection;
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {
  }

  // get
  /**
   * Gets all snapshots of a collection
   */
  getCollection(collection: string): Observable<any> {
    return this.firestore.collection(collection).snapshotChanges();
  }

  /**
   * Gets all documents of a collection
   */
  getAllDocumentsOfCollection(collection: string): Observable<any> {
    return this.firestore.collection(collection).get();
  }

  /**
   * Gets all values from collection
   */
  getCollectionValueChanges(collection: string): Observable<any> {
    return this.firestore.collection(collection).valueChanges();
  }

  /**
   * Gets the last modified data from a collection
   */
  getChangedDocuments(collection: string): Observable<any> {
    return this.firestore.collection(collection).stateChanges();
  }

  /**
   * Gets value of a collection ordered by a given value
   */
  getCollectionOrdered(collection: string, orderField: string, orderDirection: OrderByDirection = 'asc'): Observable<any> {
    return this.firestore.collection(collection, ref => ref.orderBy('order', orderDirection).limit(10)).valueChanges();
  }

  /**
   * Gets value of a document by document id from a collection
   */
  getDocById(collection: string, id: string): Observable<any> {
    return this.firestore.collection(collection).doc(id).valueChanges();
  }

  /**
   * Gets value of a collection where a match is found
   */
  getCollectionByWhereClause(collection: string, key, operator, value): Observable<any> {
    return this.firestore.collection(collection, ref => ref.where(key, operator, value)).valueChanges();
  }

  // save
  /**
   * Saves a new document into a collection
   */
  saveDocumentByAutoId(collection: string, data = null): Promise<any> {
    return this.firestore.collection(collection).add(JSON.parse(JSON.stringify(data)));
  }

  /**
   * Saves a new document into a collection
   */
  saveDocumentWithCustomId(collection: string, data = null, documentId: string): Promise<any> {
    return this.firestore.collection(collection).doc(documentId).set(JSON.parse(JSON.stringify(data)));
  }

  // update
  /**
   * Updates an existing document with the new field or updates an entire document
   */
  updateDocumentById(collection: string, id: string, data): Promise<void> {
    return this.firestore.collection(collection).doc(id).update(JSON.parse(JSON.stringify(data)));
  }

  // delete
  /**
   * Deletes an existing document by document id
   */
  deleteDocById(collection: string, id: string): Promise<void> {
    return this.firestore.collection(collection).doc(id).delete();
  }
}
