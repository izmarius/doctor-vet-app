import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {FirebaseUtilsService} from '../../../services/firebase-utils.service';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {
  authFormGroup: FormGroup;
  @Output() emailPasswordEmitter: EventEmitter<void>;
  @Input() authText: any;
  @Input() dialogRef: MatDialogRef<unknown>;
  @Output() googleAuthEmitter: EventEmitter<void>;
  @Output() forgotPasswordEmitter: EventEmitter<void>;
  @Output() emailVerificationEmitter: EventEmitter<void>;

  constructor(private firebaseUtils: FirebaseUtilsService) {
  }

  ngOnInit(): void {
    this.initAuthForm();
  }

  authWithGoogle(): void {
    this.googleAuthEmitter.emit();
  }

  emitCloseEvent(): void {
    this.dialogRef.close();
  }

  initAuthForm(): void {
    const emailPattern = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
    this.authFormGroup = new FormGroup({
      email: new FormControl('ionut.pausan@yahoo.com', [Validators.required, Validators.pattern(emailPattern)]),
      password: new FormControl('Start123', [Validators.required, Validators.minLength(6)]),
    });
  }


  onFormSubmit(): void {
    if (!this.authFormGroup.valid) {
      // this.uiAlert.setUiAlertMessage(new AlertDTO(AUTH_DATA.signUp.emailWarning, ALERT_STYLE_CLASS.error));
    } else if (!this.authFormGroup.valid && this.authFormGroup.controls.password.value.length < 6) {
      // this.uiAlert.setUiAlertMessage(new AlertDTO(AUTH_DATA.signUp.passwordLengthWarning, ALERT_STYLE_CLASS.error));
    } else {
      this.emailPasswordEmitter.emit({
        user: this.authFormGroup.controls.email.value,
        password: this.authFormGroup.controls.password.value
      });
    }
  }

  resetPassword(): void {
    this.forgotPasswordEmitter.emit();
  }

  resendValidationEmail(): void {
    this.emailVerificationEmitter.emit();
  }
}
