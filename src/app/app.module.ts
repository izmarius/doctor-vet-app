import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './ui/shared/navbar/navbar.component';
import { HeaderComponent } from './ui/shared/header/header.component';
import { UserCardComponent } from './ui/shared/user-card/user-card.component';
import { SectionTitleSubtitleComponent } from './ui/shared/section-title-subtitle/section-title-subtitle.component';
import { DoctorAppointmentsComponent } from './ui/doctor-appointments/doctor-appointments.component';
import MaterialModule from './material-module';
import { UserAnimalDataDialogComponent } from './ui/user-animal-data-dialog/user-animal-data-dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    UserCardComponent,
    SectionTitleSubtitleComponent,
    DoctorAppointmentsComponent,
    UserAnimalDataDialogComponent
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
    MaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
