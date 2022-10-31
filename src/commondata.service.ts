import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {

  constructor() { }
  servicedetails=new BehaviorSubject<any>('');
  appoitmentdetails=new BehaviorSubject<any>('')
}
