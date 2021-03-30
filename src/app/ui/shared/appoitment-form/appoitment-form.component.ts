import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appoitment-form',
  templateUrl: './appoitment-form.component.html',
  styleUrls: ['./appoitment-form.component.scss']
})
export class AppoitmentFormComponent implements OnInit {
  sampleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sampleForm = this.formBuilder.group({
      startDate: [null, Validators.required],
      startTime: [null, Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.sampleForm.value);
  }

}
