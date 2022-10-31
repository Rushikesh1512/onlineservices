import { Component, OnInit } from '@angular/core';
import { CommondataService } from 'src/commondata.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private commonDataService:CommondataService,public commonservice:CommonService) { }
  appointmentdetails:any;
  salestax:any;
  total:any;
  randNumber:any;
  paymentpayload:any;
  ngOnInit(): void {
    this.commonDataService.appoitmentdetails.subscribe(data=>{
      this.appointmentdetails=data;

    })     
    this.randNumber = Math.floor(Math.random() * 1000);   
    
   
   this.appointmentdetails.paymentStatus='Completed';
   this.salestax=this.appointmentdetails.price*(10/100);
   this.total=this.salestax+this.appointmentdetails.price;
    this.commonservice.ConfirmAppointment(this.appointmentdetails).subscribe(data=>{

      console.log(data);
    })
  


  }

}
