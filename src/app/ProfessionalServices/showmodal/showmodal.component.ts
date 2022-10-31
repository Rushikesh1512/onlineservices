import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-showmodal',
  templateUrl: './showmodal.component.html',
  styleUrls: ['./showmodal.component.css']
})
export class ShowmodalComponent implements OnInit {

  //modalRef: MdbModalRef<ShowmodalComponent> | null = null;

  constructor(public modalRef: MdbModalRef<ShowmodalComponent>) { }
  @Input() show: boolean=false;
  @Input() title: string="";
  ngOnInit(): void {
  }


}
