import { DoctorAppointmentsComponent } from './ui/doctor-appointments/doctor-appointments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './ui/shared/header/header.component';
import {DoctorScheduleComponent} from './ui/doctor-schedule/doctor-schedule.component';
import {MyProfileComponent} from './ui/my-profile/my-profile.component';

const routes: Routes = [
  {path: 'appointments', component: DoctorAppointmentsComponent},
  {path: 'profile', component: MyProfileComponent},
  {path: 'schedule', component: DoctorScheduleComponent},
  {path: '', component: HeaderComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
