import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AnimalService} from '../../services/animal/animal.service';
import {IDoctorsAppointmentsDTO} from '../../data/modelDTO/doctors-appointment-dto';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-animal-data-dialog',
  templateUrl: './user-animal-data-dialog.component.html',
  styleUrls: ['./user-animal-data-dialog.component.scss']
})
export class UserAnimalDataDialogComponent implements OnInit, OnDestroy {

  constructor(public dialogRef: MatDialogRef<UserAnimalDataDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IDoctorsAppointmentsDTO) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
