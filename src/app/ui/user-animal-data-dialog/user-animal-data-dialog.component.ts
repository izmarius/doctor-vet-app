import {Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AnimalService, IUserAnimalAndMedicalHistory} from '../../services/animal/animal.service';
import {Subscription} from 'rxjs';
import {userAnimalDialog} from '../../shared-data/Constants';

@Component({
  selector: 'app-user-animal-data-dialog',
  templateUrl: './user-animal-data-dialog.component.html',
  styleUrls: ['./user-animal-data-dialog.component.scss']
})
export class UserAnimalDataDialogComponent implements OnInit, OnDestroy {
  private userAnimalSubscription: Subscription;
  public userAnimalData: IUserAnimalAndMedicalHistory;
  public modalData;
  public userAnimalDialog;
  private selectedLink;
  public isActiveLink: boolean;
  public itemId: string;
  public isAddDiseaseEnabled: boolean;
  public isAddRecEnabled: boolean;
  private USER_COLLECTION = 'user/';
  private ANIMALS_COLLECTION = '/animals';
  private ANIMAL_APPOINTMENTS_COLLECTION = '/appointments';
  private MEDICAL_HISTORY_COLLECTION = '/medical-history';
  public newDisease: string;
  public newRecommendation: string;
  @ViewChild('animalsParent') private animalParentElement: ElementRef;

  constructor(public dialogRef: MatDialogRef<UserAnimalDataDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private animalService: AnimalService) {
  }

  // todo: avoid requesting same data twice?

  ngOnInit(): void {
    this.userAnimalDialog = userAnimalDialog;
    this.userAnimalSubscription = this.data.userAnimalDataObs.subscribe((userAnimalData) => {
      this.userAnimalData = userAnimalData;
      setTimeout(() => this.setSelectedAnimalActive(userAnimalData.animalData.id), 0);
    });
  }

  ngOnDestroy(): void {
    this.userAnimalSubscription?.unsubscribe();
  }

  addDisease(animalId: string): void {
    if (!!!this.newDisease) {
      return;
    }
    this.userAnimalData.animalMedicalHistory.diseases.push(this.newDisease);
    this.updateDiseases(this.data.userId, animalId, this.getAnimalMedicalHistory(this.userAnimalData.animalMedicalHistory.diseases, this.userAnimalData.animalMedicalHistory.recommendations));
    this.removeDiseaseInput();
  }

  addDiseaseInput(): void {
    this.isAddDiseaseEnabled = true;
  }

  addNewAppointment(): void {
    // add appointment and take animal id from selectedLink
  }

  addRecommendation(animalId: string): void {
    if (!!!this.newRecommendation) {
      return;
    }
    this.userAnimalData.animalMedicalHistory.recommendations.push(this.newRecommendation);
    this.updateDiseases(this.data.userId, animalId, this.getAnimalMedicalHistory(this.userAnimalData.animalMedicalHistory.diseases, this.userAnimalData.animalMedicalHistory.recommendations));
    this.removeRecommendationInput();
  }

  addRecommendationInput(): void {
    this.isAddRecEnabled = true;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  getAndSetAnimalData(event, animalId: string): void {
    this.animalService.getAnimalDataAndMedicalHistoryByAnimalId(animalId, this.data.userId).subscribe((res) => {
      this.userAnimalData = res;
      this.toggleActiveClass(event);
    });
  }


  getAnimalMedicalHistory(diseases: string[], recommendations: string[]): any {
    return {
      diseases,
      recommendations
    };
  }

  removeDiseaseInput(): void {
    this.newDisease = null;
    this.isAddDiseaseEnabled = false;
  }

  removeRecommendationInput(): void {
    this.isAddRecEnabled = false;
  }

  setSelectedAnimalActive(animalId: string): void {
    for (const elem of this.animalParentElement.nativeElement.children) {
      if (elem.id === animalId) {
        this.selectedLink = elem;
        this.isActiveLink = true;
      }
    }
  }

  toggleActiveClass(event): void {
    for (const elem of this.animalParentElement.nativeElement.children) {
      if (elem.id === event.target.id && this.selectedLink.id !== event.target.id) {
        this.selectedLink = elem;
        this.isActiveLink = true;
        return;
      }
    }
  }

  updateDiseases(userId, animalId, payload): void {
    const url = this.USER_COLLECTION + userId + this.ANIMALS_COLLECTION + '/' + animalId + this.MEDICAL_HISTORY_COLLECTION;
    this.animalService.updateAnimalsSubCollections(url, this.userAnimalData.medicalHistoryDocId, payload);
  }

}
