import {Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AnimalService, IUserAnimalAndMedicalHistory} from '../../services/animal/animal.service';
import {Subscription} from 'rxjs';
import {USER_ANIMAL_DIALOG, DIALOG_UI_ERRORS} from '../../shared-data/Constants';

@Component({
  selector: 'app-user-animal-data-dialog',
  templateUrl: './user-animal-data-dialog.component.html',
  styleUrls: ['./user-animal-data-dialog.component.scss']
})
export class UserAnimalDataDialogComponent implements OnInit, OnDestroy {
  @ViewChild('animalsParent') private ANIMAL_PARENT_ELEM: ElementRef;
  private USER_ANIMAL_SUB: Subscription;

  public editedRecommendation: string;
  public isActiveLink: boolean;
  public isAddDiseaseEnabled: boolean;
  public isAddRecEnabled: boolean;
  public newDisease: string;
  public newRecommendation: string;
  public selectedLink;
  public userAnimalData: IUserAnimalAndMedicalHistory;
  public userAnimalDialog;
  public userAnimalDialogErrorTxt;

  constructor(public dialogRef: MatDialogRef<UserAnimalDataDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private animalService: AnimalService) {
  }


  ngOnInit(): void {
    this.userAnimalDialog = USER_ANIMAL_DIALOG;
    this.userAnimalDialogErrorTxt = DIALOG_UI_ERRORS;
    this.USER_ANIMAL_SUB = this.data.userAnimalDataObs.subscribe((userAnimalData) => {
      this.userAnimalData = userAnimalData;
      setTimeout(() => this.setSelectedAnimalActive(userAnimalData.animalData.id), 0);
    });
  }

  ngOnDestroy(): void {
    this.USER_ANIMAL_SUB?.unsubscribe();
  }

  addDisease(): void {
    if (!!!this.newDisease) {
      return;
    }
    this.userAnimalData.animalMedicalHistory.diseases.push(this.newDisease);
    this.updateMedicalHistory(this.data.userId, this.selectedLink.id, {diseases: this.userAnimalData.animalMedicalHistory.diseases});
    this.hideDiseaseInput();
  }

  showDiseaseInput(): void {
    this.isAddDiseaseEnabled = true;
  }

  addNewAppointment(): void {
    // todo: add appointment and take animal id from selectedLink
  }

  addRecommendation(): void {
    if (!!!this.newRecommendation) {
      return;
    }
    this.userAnimalData.animalMedicalHistory.recommendations.push(this.newRecommendation);
    this.updateMedicalHistory(this.data.userId, this.selectedLink.id, {recommendations: this.userAnimalData.animalMedicalHistory.recommendations});
    this.hideRecommendationInput();
  }

  showRecommendationInput(): void {
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

  hideDiseaseInput(): void {
    this.newDisease = null;
    this.isAddDiseaseEnabled = false;
  }

  hideRecommendationInput(): void {
    this.newRecommendation = null;
    this.isAddRecEnabled = false;
  }

  editDisease(editIcon: HTMLSpanElement,
              editInput: HTMLInputElement,
              errorElem: HTMLLIElement,
              checkIcon: HTMLSpanElement,
              closeInputIcon: HTMLSpanElement,
              diseaseItem: HTMLLIElement): void {
    if (!diseaseItem.innerText || !this.newDisease || diseaseItem.innerText === this.newDisease.trim()) {
      errorElem.classList.remove('hide');
      return;
    }
    this.resetErrorMessage(errorElem);
    this.userAnimalData.animalMedicalHistory.diseases.push(this.newDisease.trim());
    this.updateMedicalHistory(this.data.userId, this.selectedLink.id, {diseases: this.userAnimalData.animalMedicalHistory.diseases});
    this.toggleEditInputAndListItem(false, editIcon, editInput, errorElem, checkIcon, closeInputIcon, diseaseItem);
  }

  editRecommendations(editIcon: HTMLSpanElement,
                      editInput: HTMLInputElement,
                      errorElem: HTMLLIElement,
                      checkIcon: HTMLSpanElement,
                      closeInputIcon: HTMLSpanElement,
                      recItem: HTMLLIElement): void {

    if (!recItem.innerText || !this.editedRecommendation || recItem.innerText === this.editedRecommendation.trim()) {
      errorElem.classList.remove('hide');
      return;
    }
    this.resetErrorMessage(errorElem);
    this.userAnimalData.animalMedicalHistory.recommendations.push(this.editedRecommendation.trim());
    this.updateMedicalHistory(this.data.userId, this.selectedLink.id, {recommendations: this.userAnimalData.animalMedicalHistory.recommendations});
    this.toggleEditInputAndListItem(false, editIcon, editInput, errorElem, checkIcon, closeInputIcon, recItem);
  }

  resetErrorMessage(errorElem: HTMLLIElement): void {
    if (errorElem.innerText) {
      errorElem.classList.add('hide');
      errorElem.innerText = '';
    }
  }

  setSelectedAnimalActive(animalId: string): void {
    for (const elem of this.ANIMAL_PARENT_ELEM.nativeElement.children) {
      if (elem.id === animalId) {
        this.selectedLink = elem;
        this.isActiveLink = true;
      }
    }
  }

  toggleActiveClass(event): void {
    for (const elem of this.ANIMAL_PARENT_ELEM.nativeElement.children) {
      if (elem.id === event.target.id && this.selectedLink.id !== event.target.id) {
        this.selectedLink = elem;
        this.isActiveLink = true;
        return;
      }
    }
  }

  toggleEditInputAndListItem(isInputDisplayed: boolean,
                             editIcon: HTMLSpanElement,
                             editInput: HTMLInputElement,
                             errorText: HTMLLIElement,
                             checkIcon: HTMLSpanElement,
                             closeInputIcon: HTMLSpanElement,
                             diseaseItem: HTMLLIElement): void {
    if (isInputDisplayed) {
      editInput.value = diseaseItem.innerText;
      diseaseItem.classList.add('hide');
      editIcon.classList.add('hide');
      checkIcon.classList.remove('hide');
      editInput.classList.remove('hide');
      closeInputIcon.classList.remove('hide');
    } else {
      // reset input value
      editInput.value = '';
      diseaseItem.classList.remove('hide');
      editIcon.classList.remove('hide');
      errorText.classList.add('hide');
      checkIcon.classList.add('hide');
      editInput.classList.add('hide');
      closeInputIcon.classList.add('hide');
    }
  }

  updateMedicalHistory(userId, animalId, payload): void {
    const ANIMALS_COLLECTION = '/animals';
    const MEDICAL_HISTORY_COLLECTION = '/medical-history';
    const USER_COLLECTION = 'user/';
    const url = USER_COLLECTION + userId + ANIMALS_COLLECTION + '/' + animalId + MEDICAL_HISTORY_COLLECTION;
    this.animalService.updateAnimalsSubCollections(url, this.userAnimalData.medicalHistoryDocId, payload);
  }
}
