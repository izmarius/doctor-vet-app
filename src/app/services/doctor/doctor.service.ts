import { LogInService } from './../auth/log-in.service';
import {Injectable} from '@angular/core';
import {FirestoreService} from '../../data/http/firestore.service';
import {Observable} from 'rxjs';
import {first, map, mergeMap, take} from 'rxjs/operators';
import {convertSnapshots} from '../../data/utils/firestore-utils.service';
import {DoctorDTO} from '../../data/modelDTO/doctor-DTO';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private DOCTOR_COLLECTION = 'doctors';

  constructor(private firestoreService: FirestoreService, private logInService: LogInService) {
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
        this.firestoreService.saveDocumentWithCustomId(this.DOCTOR_COLLECTION, doctorDTO, doctorDTO.id)
          .then((res) => {
          console.log('DOCTOR created');
        }).catch((err) => {
          console.log(err);
        });
  }

  updateDoctorInfo(doctor, doctorId: string): Promise<void> {
    return this.firestoreService.updateDocumentById(this.DOCTOR_COLLECTION + '/', doctorId, doctor);
  }

  deleteDoctor(doctorId: string): void {
    // todo: see if exists a recursive delete for a document
    this.firestoreService.deleteDocById(this.DOCTOR_COLLECTION + '/', doctorId).then(() => {
      // do something here
    }, (error) => {
      console.log('Error deleting service', error);
    });
  }

  getLoggedInDctorId(): string {
    if (this.logInService.isLoggedIn()) {
      return JSON.parse(localStorage.getItem('user')).id;
    }
  }

}
