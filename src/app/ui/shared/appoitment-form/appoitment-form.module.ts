import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoitmentFormComponent } from './appoitment-form.component';
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionTitleSubtitleComponent } from '../section-title-subtitle/section-title-subtitle.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppoitmentFormComponent, SectionTitleSubtitleComponent],
  exports: [AppoitmentFormComponent]
})
export class AppoitmentFormModule { }