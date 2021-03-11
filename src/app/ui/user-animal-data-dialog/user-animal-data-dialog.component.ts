import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-animal-data-dialog',
  templateUrl: './user-animal-data-dialog.component.html',
  styleUrls: ['./user-animal-data-dialog.component.scss']
})
export class UserAnimalDataDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserAnimalDataDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: unknown) { }

  ngOnInit(): void {
  }

}
