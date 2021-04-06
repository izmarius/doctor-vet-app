import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FirebaseUtilsService} from '../../services/firebase-utils.service';
import {SignUpService} from '../../services/auth/sign-up.service';
import {AUTH_SIGNUP_FORM_TEXT, COUNTIES} from '../../shared-data/Constants';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {
  authFormGroup: FormGroup;
  signupText;
  counties: string[];
  isAllowedToGoToSecondStep: boolean;
  secondStepGuide: string[];

  constructor(public dialogRef: MatDialogRef<SignupDialogComponent>,
              private firebaseUtils: FirebaseUtilsService,
              private signUpService: SignUpService) {
  }

  ngOnInit(): void {
    this.counties = COUNTIES;
    this.signupText = AUTH_SIGNUP_FORM_TEXT;
    this.initAuthForm();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getCounty($event): void {
    console.log($event);
  }

  initAuthForm(): void {
    const emailPattern = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
    this.authFormGroup = new FormGroup({
      email: new FormControl('pausan@gmail.com', [Validators.required, Validators.pattern(emailPattern)]),
      password: new FormControl('Start123', [Validators.required, Validators.minLength(6)]),
      phoneNumber: new FormControl('0743922689', [Validators.required, Validators.minLength(10)]),
      name: new FormControl('ionu', Validators.required),
      address: new FormControl('dsadascas dasda', Validators.required),
    });
  }

  onFormSubmit(): void {
    if (!this.authFormGroup.valid) {
      // set error message - also to login
      // this.uiAlert.setUiAlertMessage(new AlertDTO(AUTH_DATA.signUp.emailWarning, ALERT_STYLE_CLASS.error));
    } else if (!this.authFormGroup.valid && this.authFormGroup.controls.password.value.length < 6) {
      // this.uiAlert.setUiAlertMessage(new AlertDTO(AUTH_DATA.signUp.passwordLengthWarning, ALERT_STYLE_CLASS.error));
    } else {
      this.secondStepGuide = AUTH_SIGNUP_FORM_TEXT.secondStepText.split(';');
      this.isAllowedToGoToSecondStep = true;
      // save user
    }
  }


  signupWithEmailAndPassword(loginPayload): void {
    this.signUpService.signUp(loginPayload.email, loginPayload.password, this.dialogRef);
  }

  signupWithGoogle(): void {
    this.signUpService.googleSignup();
    //go to add also the phone and the other data
  }

  resendValidationEmail(): void {
    this.firebaseUtils.resendValidationEmail();
  }
}
