import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder, Validators } from "@angular/forms";
import { CommonService } from 'src/app/common.service';
import { CommondataService } from 'src/commondata.service';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  registerForm:any;
  Servicedays:Array<string> = [];
  items = [{name: "Item 1"},{name: "Item 2"}];
  myDate:any;
  todaydate:any;
  weekday:any;
  paymentrecordstatus:boolean=false;
  price:any;
  appointmentid:any;
  datapayload:any;
  constructor(private commonDataService:CommondataService,public formbuilder: FormBuilder,public commonservice:CommonService,public router:Router) {
    this.weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];      
   
    let dt = new Date();
    for(let i=0;i<3;i++){
      
    dt.setDate(dt.getDate() + 1);
    this.Servicedays.push((dt.toDateString().split(" ")[0]+" "+dt.toDateString().split(" ")[2]));   
    
    console.log('next date'+dt);
    console.log('next service'+ this.Servicedays);

   }
  }
  BookappointmentForm = new FormGroup({
    username: new FormControl(''),    
    service_name: new FormControl(''),
    service_type: new FormControl(''),
    Service_typedesc: new FormControl(''),
    price: new FormControl('200'),
    Dateofservice: new FormControl(''),
    Arrivaltime: new FormControl(''),
    Dateofbooking: new FormControl(''),
    payment_status: new FormControl('')
  })
  selectedQuantity:any='200';
  getBookById(value:any){
    alert(value)
  }
  ngOnInit(): void {
    
    this.registerForm = this.formbuilder.group({
      
      username:[''],
      Servicename:[''],
      Servicetype:[''],
      Servicetypedesc: ['', Validators.required],
      price: [0, Validators.required],
      Dateofservice: [''],
      Arrivaltime: [''],
      Dateofbooking: [''],
      PaymentStatus: [''],
      city:[''],
      
      
  });  

  this.commonDataService.servicedetails.subscribe(data=>{  
     
    let test = {Servicename: data.servicename, price : data.price,Servicetype:data.servicetype,username:'rnikam@gmail.com',Service_typedesc:data.servicetypedesc,Arrivaltime:'',Dateofbooking:formatDate(new Date(), 'yyyy/MM/dd', 'en'),city:data.location};

    this.paymentrecordstatus=data.showappointment;
    this.registerForm.patchValue(test);
    
  })
  if(!this.paymentrecordstatus){
  this.CheckforPaymentstatus();   
   this.addpartialrecord();
  }
  }
  addpartialrecord=()=>{

    debugger;
  this.commonDataService.servicedetails.subscribe(data=>{
   
     let test = {Servicename: data.servicename, price : data.price,Servicetype:data.servicetype,username:'rnikam@gmail.com',Servicetypedesc:data.servicetypedesc,Arrivaltime:'10 to 11',Dateofservice:'sun 21'.toString(),PaymentStatus:'ongoing',Dateofbooking:formatDate(new Date(), 'yyyy/MM/dd', 'en')};
     debugger;
     this.registerForm.patchValue(test);
     if(this.paymentrecordstatus){
      localStorage.setItem('appoitmentid',data.orderId);
      this.appointmentid=data.orderId;
     }
     
   })
 
 this.commonservice.BookAppointment(this.registerForm.value).subscribe(data=>{
 
   console.log(data);
  
  localStorage.setItem('appoitmentid',data.appointmentId);
  this.appointmentid=data.appointmentId;
  
   
 })
  }
      
     CheckforPaymentstatus=()=>{
      
      let queryParams = new HttpParams();
      queryParams = queryParams.append("username",this.registerForm.value.username);
    queryParams = queryParams.append("servicename",this.registerForm.value.Servicename);
    queryParams = queryParams.append("bookingdate",this.registerForm.value.Dateofbooking);
      this.commonservice.CheckforPaymentstatus(queryParams).subscribe(data=>{
      this.paymentrecordstatus=data;
      })

       }
proceedtopay=async()=>{
  

  this.commonDataService.servicedetails.subscribe(data=>{
   let servicedate=(<HTMLInputElement>document.querySelector('input[name="dateofarrival"]:checked'))?.value;
    let arrtime=(<HTMLInputElement>document.querySelector('input[name="arrtime"]:checked'))?.value;
    this. datapayload = {AppointmentId:localStorage.getItem('appoitmentid'),Servicename: data.servicename, price : data.price,Servicetype:data.servicetype,username:'rnikam@gmail.com',Servicetypedesc:data.servicetypedesc,Arrivaltime:arrtime.toString(),Dateofservice:servicedate.toString(),PaymentStatus:'ongoing',Dateofbooking:formatDate(new Date(), 'yyyy/MM/dd', 'en'),city:'test'};
   
    
  })



this.commonservice.ConfirmAppointment(this.datapayload).subscribe(data=>{

  console.log(data);
  this.commonDataService.appoitmentdetails.next(data);
  this.router.navigateByUrl('payment');
})


}

}
