import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookAppointmentComponent } from './Appointments/book-appointment/book-appointment.component';
import { DServicesComponent } from './DoorstepServices/d-services/d-services.component';
import { ShowAppointmentComponent } from './Appointments/show-appointment/show-appointment.component';
import { EnrollasprofessionalComponent } from './ProfessionalServices/enrollasprofessional/enrollasprofessional.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'bookappoint', component: BookAppointmentComponent },
  { path: 'servicehome', component: DServicesComponent },
  { path: 'showappointments', component: ShowAppointmentComponent },
  { path: 'enrolllasprof', component: EnrollasprofessionalComponent },
  {path:'payment',component:PaymentComponent},
  { path: '**', component: DServicesComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
