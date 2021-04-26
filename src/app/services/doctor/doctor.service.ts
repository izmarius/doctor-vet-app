import {Injectable} from '@angular/core';
import {FirestoreService} from '../../data/http/firestore.service';
import {Observable} from 'rxjs';
import {first, map, mergeMap} from 'rxjs/operators';
import {convertSnapshots} from '../../data/utils/firestore-utils.service';
import {DoctorDTO} from '../../data/modelDTO/doctor-DTO';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private DOCTOR_COLLECTION = 'doctors/';

  constructor(private firestoreService: FirestoreService) {
  }

  getAllDoctors(): Observable<DoctorDTO[]> {
    return this.firestoreService.getCollection(this.DOCTOR_COLLECTION)
      .pipe(
        map((snaps) => convertSnapshots<DoctorService>(snaps)),
        first()
      );
  }

  getDoctorById(doctorId: string): Observable<DoctorDTO> {
    return this.firestoreService.getDocById(this.DOCTOR_COLLECTION, doctorId);
  }

  createDoctor(doctorDTO: DoctorDTO): void {
        this.firestoreService.saveDocumentByAutoId(this.DOCTOR_COLLECTION, doctorDTO).then((res) => {
          console.log('DOCTOR created');
        }).catch((err) => {
          console.log(err);
        });
  }

  updateDoctorInfo(doctor: DoctorDTO, doctorId: string): void {
    this.firestoreService.updateDocumentById(this.DOCTOR_COLLECTION, doctorId, doctor)
      .then(() => {
        // do something here
        console.log('service updated');
      }, (error) => {
        console.log('Error updating service', error);
      });
  }

  deleteDoctor(doctorId: string): void {
    // todo: see if exists a recursive delete for a document
    this.firestoreService.deleteDocById(this.DOCTOR_COLLECTION, doctorId).then(() => {
      // do something here
    }, (error) => {
      console.log('Error deleting service', error);
    });
  }

}
