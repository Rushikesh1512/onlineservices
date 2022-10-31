
import { CommonService } from 'src/app/common.service';
import { HttpParams } from '@angular/common/http';
import { CommondataService } from 'src/commondata.service';
import { Observable, merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent,MatPaginatorIntl  } from '@angular/material/paginator';
import { DialogueboxComponent } from 'src/app/dialoguebox/dialoguebox.component';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-show-appointment',
  templateUrl: './show-appointment.component.html',
  styleUrls: ['./show-appointment.component.css']
})

export class ShowAppointmentComponent  {

   public displayedColumns = ['servicename', 'dateofservice','servicetypedesc','paymentStatus','update'];

  public dataSource = new MatTableDataSource<UserData>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngOnInit() {
    this.getAllUser();
  }
  public getAllUser = () => {


    let queryParams = new HttpParams();
    
  queryParams = queryParams.append("Username",'rnikam@gmail.com');
   this.commonservice.GetBookedServicesByUsername(queryParams).subscribe(result=>{      
     
     this.dataSource.data = result as UserData[];
  });
  }


  constructor(public commonservice: CommonService,private dialog: MatDialog,private commonDataService:CommondataService,public router:Router) { 
   
  }
 

  openDialog(element:any) {
    
    const dialogRef = this.dialog.open(DialogueboxComponent,{
    data:{
        content: element,
        showappointment:true
    }
    });
     
    
} 
OpenBookingform(element:any){
debugger;
let ServiceDetails={orderId:element.appointmentId,servicename:element.servicename,username:element.element,servicetype:element.servicetype,servicetypedesc:element.servicetypedesc,price:element.price,timetaken:'',location:element.city,showappointment:true};

this.commonDataService.servicedetails.next(ServiceDetails);
  this.router.navigateByUrl('bookappoint');
}
  


ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}

}
export interface UserData {
  appointmentId: string;
  username: string;
  servicename: string;
  servicetype: string;
  servicetypedesc: string;
  price: number;
  dateofservice: string;
  arrivaltime: string;
  dateofbooking: string;
  paymentStatus: string;
  
}
