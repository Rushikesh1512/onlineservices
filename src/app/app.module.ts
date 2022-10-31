import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DServicesComponent } from './DoorstepServices/d-services/d-services.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookAppointmentComponent } from './Appointments/book-appointment/book-appointment.component';
import { ShowAppointmentComponent } from './Appointments/show-appointment/show-appointment.component';
import { EnrollasprofessionalComponent } from './ProfessionalServices/enrollasprofessional/enrollasprofessional.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './payment/payment.component';
import { ShowmodalComponent } from './ProfessionalServices/showmodal/showmodal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MatTableModule } from '@angular/material/table'  
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule } from '@angular/material/paginator';
import { DialogueboxComponent } from './dialoguebox/dialoguebox.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DServicesComponent,
    HeadernavComponent,
    BookAppointmentComponent,
    ShowAppointmentComponent,
    EnrollasprofessionalComponent,
    PaymentComponent,
    ShowmodalComponent,
    DialogueboxComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule   
    
    
  ],
  exports:[

    MatSortModule,
    MatPaginatorModule
  ],
  providers: [MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
