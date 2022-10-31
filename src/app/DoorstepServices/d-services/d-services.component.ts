import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder, Validators } from "@angular/forms";
import { CommonService } from 'src/app/common.service';
import { CommondataService } from 'src/commondata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-d-services',
  templateUrl: './d-services.component.html',
  styleUrls: ['./d-services.component.css']
})

export class DServicesComponent implements OnInit {
  isSubmitted = false;
  detailsearch:boolean=false;
  constructor(public fb: FormBuilder,public commonservice:CommonService,public commonDataService:CommondataService,private router:Router,private elementRef: ElementRef) { }
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  availblecities:any;
  availbleservicelist:any;
  ngOnInit(): void {
   this.getinitialdata();
  }
  getinitialdata=async()=>{
    this.commonservice.getavailablecities().subscribe(result=>{
      debugger;
      this.availblecities=result; 
      
   });

   this.commonservice.getavailbleservicelist().subscribe(result=>{
    debugger;
    this.availbleservicelist=result; 
    
 });

  }
  title = 'mdf';
 
  contactForm = new FormGroup({
    service: new FormControl(''),    
    city: new FormControl('')
  })

  detailsearchform = new FormGroup({
    service: new FormControl(''),    
    
  })
 Availbleservice:any;
 selectedUser:any;
  onSubmit() {
    
    let queryParams = new HttpParams();
    queryParams = queryParams.append("Keyword",this.contactForm.value.service);
    queryParams = queryParams.append("location",this.contactForm.value.city);
     this.commonservice.GetServicesListByLocation(queryParams).subscribe(result=>{
     this.Availbleservice=result;
      
      this.detailsearch=true;
      let test={service:this.Availbleservice[0].servicetypedesc};
      this.detailsearchform.patchValue(test);
      this.selectedUser=this.contactForm.value.service;
  });
 

  }
  onSubmitsearch(){
    
    let queryParams = new HttpParams();
    
    queryParams = queryParams.append("servicetype",this.detailsearchform.value.service);
    queryParams = queryParams.append("location",this.contactForm.value.city);
    this.commonservice.GetServicesListByservice(queryParams).subscribe(result=>{      
      this.Availbleservice=result;       
   });

  }
  Bookservice(service:any){
        
  this.commonDataService.servicedetails.next(service);
  this.router.navigateByUrl('bookappoint');

  }
  // ngOndestroy() {
  //   this.elementRef.nativeElement.remove();
  // }
}
