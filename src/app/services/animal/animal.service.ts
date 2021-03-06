import {map, mergeMap, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FirestoreService} from 'src/app/data/http/firestore.service';
import {AnimalDto} from 'src/app/data/modelDTO/animal-dto';
import {UserService} from '../user/user.service';


export interface IUserAnimalAndMedicalHistory {
  userData: any;
  animalData: any;
  animalMedicalHistory: any;
  medicalHistoryDocId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(
    private fireStoreService: FirestoreService,
    private userService: UserService
  ) {
  }

  private USER_COLLECTION = 'user/';
  private ANIMALS_COLLECTION = '/animals';
  private ANIMAL_APPOINTMENTS_COLLECTION = '/appointments';
  private MEDICAL_HISTORY_COLLECTION = '/medical-history';

  getAnimalById(animalId: string | number, userId: string): Observable<AnimalDto> {
    return this.fireStoreService.getDocById(this.getAnimalUrl(userId), animalId as string);
  }

  getAnimalsMedicalHistoryDocs(animalId: string | number, userId: string): Observable<any> {
    const medicalHistoryPath = this.getAnimalUrl(userId) + '/' + animalId + this.MEDICAL_HISTORY_COLLECTION;
    return this.fireStoreService.getAllDocumentsOfCollection(medicalHistoryPath);
  }

  getAnimalDataAndMedicalHistoryByAnimalId(animalId: string | number, userId: string): Observable<IUserAnimalAndMedicalHistory> {
    return this.getAnimalsDataAndMedicalHistories(animalId, userId).pipe(
      mergeMap(animalWithMedicalHistory => {
        return this.userService.getUserDataById(userId)
          .pipe(
            map(userData => {
              return {
                ...animalWithMedicalHistory,
                userData
              };
            })
          );
      })
    );
  }

  getAnimalsDataAndMedicalHistories(animalId: string | number, userId: string): Observable<any> {
    return this.getAnimalById(animalId, userId).pipe(
      mergeMap(animalData => {
        return this.getAnimalsMedicalHistoryDocs(animalId, userId)
          .pipe(
            take(1),
            map(medicalHistoryCollection => {
              return {
                animalData,
                animalMedicalHistory: medicalHistoryCollection.docs[0].data(),
                medicalHistoryDocId: medicalHistoryCollection.docs[0].id
              };
            })
          );
      }));
  }

  getAnimalsAppointmentsDocs(animalId: string, userId: string): Observable<any> {
    const animalAppointmentsPath = this.getAnimalUrl(userId) + '/' + animalId + this.ANIMAL_APPOINTMENTS_COLLECTION;
    return this.fireStoreService.getAllDocumentsOfCollection(animalAppointmentsPath);
  }

  addAnimalToUser(animalDto: AnimalDto, userId: string): Promise<void> {
    // todo: add also animal Id to user - generate the id from here
    return this.fireStoreService.saveDocumentByAutoId(this.getAnimalUrl(userId), animalDto)
      .then(() => {
        window.alert('new animal addded');
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  updateUserAnimalInfo(animalDto: AnimalDto, animalId: string, userId: string): Promise<void> {
    return this.fireStoreService.updateDocumentById(this.getAnimalUrl(userId), animalId, animalDto)
      .then(() => {
        window.alert('animal updated');
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  updateAnimalsSubCollections(url: string, documentId: string, documentToUpdate): void {
    this.fireStoreService.updateDocumentById(url, documentId, documentToUpdate).then(() => {
      window.alert('Update success');
    }).catch((error) => {
      console.log(error.message);
    });
  }

  deleteUserAnimal(animalId: string, userId: string): Promise<void> {
    return this.fireStoreService.deleteDocById(this.getAnimalUrl(userId), animalId)
      .then(() => {
        window.alert('animal deleted');
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  getAnimalUrl(userId: string): string {
    return this.USER_COLLECTION + userId + this.ANIMALS_COLLECTION;
  }
}
