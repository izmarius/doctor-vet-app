import { DoctorAppointmentsComponent } from './ui/doctor-appointments/doctor-appointments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './ui/shared/header/header.component';

const routes: Routes = [
  {path: 'doctor-appointments', component: DoctorAppointmentsComponent},
  {path: '', component: HeaderComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
