import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoitmentFormComponent } from './appoitment-form.component';
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  declarations: [AppoitmentFormComponent],
  exports: [AppoitmentFormComponent]
})
export class AppoitmentFormModule { }
