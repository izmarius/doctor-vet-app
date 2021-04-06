import {Injectable} from '@angular/core';
import {FirestoreService} from '../../data/http/firestore.service';
import {Observable} from 'rxjs';
import {first, map, take} from 'rxjs/operators';
import {convertSnapshots} from '../../data/utils/firestore-utils.service';
import {DoctorDTO} from '../../data/modelDTO/doctor-DTO';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private DOCTOR_COLLECTION = 'doctors';

  constructor(private firestoreService: FirestoreService) {
  }

  getDoctorById(doctorId: string): Observable<DoctorDTO> {
    return this.firestoreService.getDocById(this.DOCTOR_COLLECTION, doctorId).pipe(take(1));
  }

  getAllDoctors(): Observable<DoctorDTO[]> {
    return this.firestoreService.getCollection(this.DOCTOR_COLLECTION)
      .pipe(
        map((snaps) => convertSnapshots<DoctorService>(snaps)),
        first()
      );
  }

  createDoctor(doctorDTO): void {
    this.firestoreService.saveDocumentWithCustomId('doctors', doctorDTO, doctorDTO.id)
      .then(() => {
      }).catch((err) => {
    });
  }

  updateDoctorInfo(doctor: DoctorDTO, doctorId: string): void {
    this.firestoreService.updateDocumentById(this.DOCTOR_COLLECTION + '/', doctorId, doctor)
      .then(() => {
        // do something here
        console.log('service updated');
      }, (error) => {
        console.log('Error updating service', error);
      });
  }

  deleteDoctor(doctorId: string): void {
    // todo: see if exists a recursive delete for a document
    this.firestoreService.deleteDocById(this.DOCTOR_COLLECTION + '/', doctorId).then(() => {
      // do something here
    }, (error) => {
      console.log('Error deleting service', error);
    });
  }
}
