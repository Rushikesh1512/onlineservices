import { Component, OnInit } from '@angular/core';
import {  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialoguebox',
  templateUrl: './dialoguebox.component.html',
  styleUrls: ['./dialoguebox.component.css']
})
export class DialogueboxComponent implements OnInit {
  message: string = "Are you sure want to delete?"
    
    cancelButtonText = "Close"    
    element:any;
    iscontentpage:boolean=false;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, public router:Router,private dialogRef: MatDialogRef<DialogueboxComponent>) {

if(data.showappointment){

  this.element=data.content;
  this.iscontentpage=data.showappointment;
  this.cancelButtonText="Close"
  
}else{

  this.message=data.content;
  this.iscontentpage=data.showappointment;
  this.cancelButtonText="Home"
}

   }

  ngOnInit(): void {
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
}
navigateToHome():void{
  this.dialogRef.close(true);
  this.router.navigateByUrl('servicehome');

}

}
