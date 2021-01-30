import {Injectable} from '@angular/core';
import {FirestoreService} from '../../data/http/firestore.service';
import {DoctorsAppointmentDTO} from '../../data/modelDTO/doctors-appointment-dto';
import {first, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {convertSnapshots} from '../../data/utils/firestore-utils.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentsService {
  private DOCTOR_COLLECTION = 'doctors/';
  private APPOINTMENT_COLLECTION = '/appointments';


  constructor(private firestoreService: FirestoreService) {
  }

  getAllAppointments(doctorId: string): Observable<DoctorsAppointmentDTO[]> {
    return this.firestoreService.getCollection(this.getAppointmentUrl(doctorId)).pipe(
      map(snaps => convertSnapshots<DoctorsAppointmentDTO[]>(snaps)),
      first()
    );
    // firebase uses websocket to transfer data and first closes that connection after first value was transmited - for multiple tryes we will use take method

    // todo: subscribe in component
  }

  getAppointmentById(appointmentId: string, doctorId: string): Observable<DoctorsAppointmentDTO> {
    return this.firestoreService.getDocById(this.getAppointmentUrl(doctorId), appointmentId);
    // todo: subscribe in component
  }

  createAppointment(app: DoctorsAppointmentDTO, doctorId: string): void {
    app.getAnimals().forEach(animal => {
      // todo : use batch or transaction saving? batch 500 operation max at a time
      // in the same batch can add the creation and deletion of documents
      // transactions put a read lock on the value that it processes
      this.firestoreService.saveDocumentByAutoId(this.getAppointmentUrl(doctorId), app).then(() => {
        // firebasse will not return the created object
        // if success - we will return the promise and display new created data in ui
      }, (error) => {
        console.log('Error creating appointment', error);
      });
    });
  }

// todo : see how is better ? to transform the promise into obs or let it as a promise?
  updateAppointment(app: DoctorsAppointmentDTO, appointmentId: string, doctorId: string): void {
    this.firestoreService.updateDocumentById(this.getAppointmentUrl(doctorId), appointmentId, app)
      .then(() => {

      }, (error) => {
        console.log('Error updating appointment', error);
      });
  }

  deleteAppointment(appointmentId: string, doctorId: string): void {
    this.firestoreService.deleteDocById(this.getAppointmentUrl(doctorId), appointmentId).then(() => {
      // do something here
    }, (error) => {
      console.log('Error deleting appointment', error);
    });
  }

  getAppointmentUrl(doctorId: string): string {
    return this.DOCTOR_COLLECTION + doctorId + this.APPOINTMENT_COLLECTION;
  }
}
