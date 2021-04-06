import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './ui/shared/navbar/navbar.component';
import {HeaderComponent} from './ui/shared/header/header.component';
import {UserCardComponent} from './ui/shared/user-card/user-card.component';
import {SectionTitleSubtitleComponent} from './ui/shared/section-title-subtitle/section-title-subtitle.component';
import {DoctorAppointmentsComponent} from './ui/doctor-appointments/doctor-appointments.component';
import MaterialModule from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserAnimalDataDialogComponent} from './ui/user-animal-data-dialog/user-animal-data-dialog.component';
import {FooterComponent} from './ui/shared/footer/footer.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {LoginDialogComponent} from './ui/login-dialog/login-dialog.component';
import {SignupDialogComponent} from './ui/signup-dialog/signup-dialog.component';
import {AuthDialogComponent} from './ui/shared/auth-dialog/auth-dialog.component';
import {UploadPhotoComponent} from './ui/shared/upload-photo/upload-photo.component';
import {DropdownComponent} from './ui/shared/dropdown/dropdown.component';
import {MatSelectModule} from "@angular/material/select";
import { DoctorScheduleComponent } from './ui/doctor-schedule/doctor-schedule.component';
import { AdjustableHeaderComponent } from './ui/shared/adjustable-header/adjustable-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    UserCardComponent,
    SectionTitleSubtitleComponent,
    DoctorAppointmentsComponent,
    UserAnimalDataDialogComponent,
    FooterComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    AuthDialogComponent,
    UploadPhotoComponent,
    DropdownComponent,
    DoctorScheduleComponent,
    AdjustableHeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    AngularFirestore,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'fill'}
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
