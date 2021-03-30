import { DoctorAppointmentsComponent } from './ui/doctor-appointments/doctor-appointments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAppointmentComponent } from './ui/doctor-appointment/doctor-appointment.component';
import { AppoitmentFormComponent } from './ui/shared/appoitment-form/appoitment-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/doctor-appointment', pathMatch: 'full'},
  {path: 'doctor-appointments', component: DoctorAppointmentsComponent},
  {path: 'doctor-appointment', component: DoctorAppointmentComponent},
  {path: 'appointment-form', component: AppoitmentFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
