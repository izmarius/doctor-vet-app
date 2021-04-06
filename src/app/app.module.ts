import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDatepickerModule, NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './ui/shared/navbar/navbar.component';
import { HeaderComponent } from './ui/shared/header/header.component';
import { SectionTitleComponent } from './ui/shared/section-title/section-title.component';
import { DoctorAppointmentComponent } from './ui/doctor-appointment/doctor-appointment.component';
import { HeaderTitleComponent } from './ui/shared/header-title/header-title.component';
import { UserCardComponent } from './ui/shared/user-card/user-card.component';
import { SectionTitleSubtitleComponent } from './ui/shared/section-title-subtitle/section-title-subtitle.component';
import { DoctorAppointmentsComponent } from './ui/doctor-appointments/doctor-appointments.component';
import { AppCalendarModule } from './ui/shared/app-calendar/app-calendar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppoitmentFormModule } from './ui/shared/appoitment-form/appoitment-form.module';
import { AppoitmentFormComponent } from './ui/shared/appoitment-form/appoitment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    HeaderComponent,
    SectionTitleComponent,
    DoctorAppointmentComponent,
    HeaderTitleComponent,
    UserCardComponent,
    SectionTitleSubtitleComponent,
    DoctorAppointmentsComponent
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
    NgbModule,
    AppCalendarModule,
    AppRoutingModule,
    AppoitmentFormModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  entryComponents: [ AppoitmentFormComponent ]
})
export class AppModule { }
