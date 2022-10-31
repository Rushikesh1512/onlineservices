import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ShowmodalComponent } from '../showmodal/showmodal.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogueboxComponent } from 'src/app/dialoguebox/dialoguebox.component';

@Component({
  selector: 'app-enrollasprofessional',
  templateUrl: './enrollasprofessional.component.html',
  styleUrls: ['./enrollasprofessional.component.css']
})
export class EnrollasprofessionalComponent implements OnInit {

  constructor(public commonservice:CommonService,private dialog: MatDialog) { }
  Services=['Cleaning','Saloon at home']
  slots=['10am to 2pm','2pm to 6pm','6pm to 10pm']
  modalRef: MdbModalRef<ShowmodalComponent> | null = null;
  formsubmitted:boolean=false;
  errmsg:any;
  ngOnInit(): void {
  }
  ProfessionalForm = new FormGroup({
    userid:new FormControl(''),
    firstname: new FormControl('',[Validators.required]),    
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    mobileNumber:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    adress:new FormControl('',[Validators.required]),
    service:new FormControl('',[Validators.required]),
    companyName:new FormControl(''),
    availbleTimming:new FormControl('',[Validators.required])
  })
  onSubmit() {
    if(!this.ProfessionalForm.valid) {
      this.ProfessionalForm.markAllAsTouched();
    }
    
    if(this.ProfessionalForm.valid){   
    
    this.commonservice.RegisterProfessional(this.ProfessionalForm.value).subscribe(data=>{
      const dialogRef = this.dialog.open(DialogueboxComponent,{
        data:{
            content: "Registration done sucessfully",
            showappointment:false
        }
        });
      this.ProfessionalForm.reset();
      
    },(err) => {console.log(err)
    this.errmsg=err.error;
    window.scrollTo(0,0);
    });
  }
  }

    
}
