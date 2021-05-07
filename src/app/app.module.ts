import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './ui/shared/navbar/navbar.component';
import { SectionTitleComponent } from './ui/shared/section-title/section-title.component';
import { DoctorAppointmentComponent } from './ui/doctor-appointment/doctor-appointment.component';
import { HeaderTitleComponent } from './ui/shared/header-title/header-title.component';
import { UserCardComponent } from './ui/shared/user-card/user-card.component';
import { DoctorAppointmentsComponent } from './ui/doctor-appointments/doctor-appointments.component';
import { AppCalendarModule } from './ui/shared/app-calendar/app-calendar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppoitmentFormModule } from './ui/shared/appoitment-form/appoitment-form.module';
import { AppoitmentFormComponent } from './ui/shared/appoitment-form/appoitment-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './ui/shared/header/header.component';
import MaterialModule from './material-module';
import {UserAnimalDataDialogComponent} from './ui/user-animal-data-dialog/user-animal-data-dialog.component';
import {FooterComponent} from './ui/shared/footer/footer.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {LoginDialogComponent} from './ui/login-dialog/login-dialog.component';
import {SignupDialogComponent} from './ui/signup-dialog/signup-dialog.component';
import {AuthDialogComponent} from './ui/shared/auth-dialog/auth-dialog.component';
import {UploadPhotoComponent} from './ui/shared/upload-photo/upload-photo.component';
import {DropdownComponent} from './ui/shared/dropdown/dropdown.component';
import {DoctorScheduleComponent} from './ui/doctor-schedule/doctor-schedule.component';
import {AdjustableHeaderComponent} from './ui/shared/adjustable-header/adjustable-header.component';
import {ScheduleSetterComponent} from './ui/doctor-schedule/schedule-setter/schedule-setter.component';
import {MyProfileComponent} from './ui/my-profile/my-profile.component';
import {PhotoTextComponent} from './ui/my-profile/photo-text/photo-text.component';
import {NgParticlesModule} from 'ng-particles';
import { TextCardComponent } from './ui/shared/text-card/text-card.component';
import { FeaturesComponent } from './ui/features/features.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { ActionSectionComponent } from './ui/shared/action-section/action-section.component';
import { ArticleSectionTextComponent } from './ui/shared/article-section-text/article-section-text.component';
import { ArticleSectionStepsComponent } from './ui/shared/article-section-steps/article-section-steps.component';
import { ArticleSectionImageComponent } from './ui/shared/article-section-image/article-section-image.component';
import { SharedModuleModule } from './ui/shared/shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionTitleComponent,
    DoctorAppointmentComponent,
    HeaderTitleComponent,
    UserCardComponent,
    DoctorAppointmentsComponent,
    DoctorAppointmentsComponent,
    UserAnimalDataDialogComponent,
    FooterComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    AuthDialogComponent,
    UploadPhotoComponent,
    DropdownComponent,
    DoctorScheduleComponent,
    AdjustableHeaderComponent,
    ScheduleSetterComponent,
    MyProfileComponent,
    PhotoTextComponent,
    TextCardComponent,
    FeaturesComponent,
    HomePageComponent,
    ActionSectionComponent,
    ArticleSectionTextComponent,
    ArticleSectionStepsComponent,
    ArticleSectionImageComponent,
    HeaderComponent
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
    AppCalendarModule,
    AppRoutingModule,
    AppoitmentFormModule,
    AppoitmentFormModule,
    SharedModuleModule
  ],
  entryComponents: [ AppoitmentFormComponent,
    NgParticlesModule
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
