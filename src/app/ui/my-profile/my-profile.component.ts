import {Component, OnInit} from '@angular/core';
import IPhotoTitle from './photo-text/photo-text.component';
import {DoctorDTO} from '../../data/modelDTO/doctor-DTO';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {INPUT_LABELS_TXT, INPUT_REGEX_TEXTS, MY_PROFILE} from '../../shared-data/Constants';
import {DoctorService} from '../../services/doctor/doctor.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  profileHeaderData: IPhotoTitle;
  userData: DoctorDTO;
  userForm: FormGroup;
  userDataText;
  formErrorMessage: string;
  formSuccessMessage: string;
  isFormValid = false;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit(): void {
    this.userDataText = MY_PROFILE;
    this.userDataText.labels = INPUT_LABELS_TXT;
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.setProfileData();
    this.initEditUserForm();
  }

  initEditUserForm(): void {
    const emailPattern = INPUT_REGEX_TEXTS.email;
    const phonePattern = INPUT_REGEX_TEXTS.phoneNumber;

    this.userForm = new FormGroup({
      email: new FormControl(this.userData.email, [Validators.required, Validators.pattern(emailPattern)]),
      clinicName: new FormControl(this.userData.clinicName ? this.userData.clinicName : ''),
      doctorName: new FormControl(this.userData.doctorName, Validators.required),
      location: new FormControl(this.userData.location, Validators.required),
      locationGMapsUrl: new FormControl(this.userData.locationGMapsUrl ? this.userData.locationGMapsUrl : ''),
      phoneNumber: new FormControl(this.userData.phoneNumber, [Validators.required, Validators.pattern(phonePattern)]),
    });
  }

  getFormControlLabelName(field: string): string {
    const labels = {
      email: this.userDataText.emailLabel,
      phoneNumber: this.userDataText.phoneLabel,
      doctorName: this.userDataText.doctorNameLabel,
      location: this.userDataText.locationLabel
    };
    return labels[field];
  }

  getUserData(): DoctorDTO {
    return {
      id: this.userData.id,
      email: this.userForm.controls.email.value,
      phoneNumber: this.userForm.controls.phoneNumber.value,
      doctorName: this.userForm.controls.doctorName.value,
      location: this.userForm.controls.location.value,
      clinicName: this.userForm.controls.clinicName.value,
      locationGMapsUrl: this.userForm.controls.locationGMapsUrl.value
    };
  }

  isDataChanged(): boolean {
    const formData = this.getUserData();
    if (this.userForm.invalid) {
      return true;
    }
    return this.userData.doctorName === formData.doctorName && this.userData.email === formData.email &&
      this.userData.phoneNumber === formData.phoneNumber && this.userData.location === formData.location &&
      this.userData.locationGMapsUrl === formData.locationGMapsUrl && this.userData.clinicName === formData.clinicName;
  }

  onFormSubmit(): void {
    if (this.userForm.invalid) {
      for (const field in this.userForm.controls) {
        if (this.userForm.controls[field].status === 'INVALID') {
          this.formErrorMessage = MY_PROFILE.errorMessage[0] + ' "' + this.getFormControlLabelName(field) + '" ' + ' ' + MY_PROFILE.errorMessage[1];
          this.isFormValid = true;
          return;
        }
      }
    }
    this.doctorService.updateDoctorInfo(this.getUserData(), this.userData.id).then(() => {
      localStorage.setItem('user', JSON.stringify(this.getUserData()));
      this.formSuccessMessage = MY_PROFILE.formSuccessMessage;
      this.isFormValid = false;
      this.profileHeaderData.title = this.userData.doctorName;
      setTimeout(() => {
        this.isFormValid = true;
      }, 5000);
    }).catch((err) => {
      console.log(err);
    });
  }

  setProfileData(): void {
    this.profileHeaderData = {};
    this.profileHeaderData.photo = '../../../../assets/photos/test.jpeg';
    this.profileHeaderData.title = this.userData.doctorName;
    this.profileHeaderData.style = {
      'margin-bottom': '2rem',
      display: 'flex',
    };
  }
}
