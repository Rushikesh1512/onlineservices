import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) {}
  BaseUrl='https://localhost:44347/api/Service';

  baseurlbookservice='https://localhost:44347/api/Httppost';
  baseurlprofessional='https://localhost:44309/api/ProfessionalServices';
  baseurlcheckstatus='https://localhost:44347/api/Httppost/CheckPaymentstatus';
    GetServicesListByLocation(queryParams:any){

    return this._http.get(this.BaseUrl,{params:queryParams});
    }
    GetServicesListByservice(queryParams:any){

      return this._http.get(this.BaseUrl+'/servicetype',{params:queryParams});
    }
    GetBookedServicesByUsername(queryparams:any){

      return this._http.get(this.baseurlbookservice+'/GetAppointment',{params:queryparams});
    }
    RegisterProfessional(payload:any){

      return this._http.post<any>(this.baseurlprofessional,payload);
    }
    BookAppointment(payload:any){
      

      return this._http.post<any>(this.baseurlbookservice,payload);
    }
      ConfirmAppointment(payload:any){

        return this._http.put<any>(this.baseurlbookservice,payload);
      }
      CheckforPaymentstatus(payload:any){
        debugger;
        return this._http.get<any>(this.baseurlcheckstatus,{params:payload});

      }
      getavailablecities(){
        return this._http.get(this.BaseUrl+'/getavailablecity');

      }
      getavailbleservicelist(){
        return this._http.get(this.BaseUrl+'/getavailableservices');

      }
    }
