import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
   ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireFunctionsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
