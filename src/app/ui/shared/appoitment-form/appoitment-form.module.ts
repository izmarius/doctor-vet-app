import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoitmentFormComponent } from './appoitment-form.component';
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppoitmentFormComponent],
  exports: [AppoitmentFormComponent]
})
export class AppoitmentFormModule { }
