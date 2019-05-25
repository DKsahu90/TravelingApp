import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse }  from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VechileService {

  public BaseUrl="http://localhost:63611/";
  constructor(private _http:HttpClient) { }


  getVechilelist():Observable<any>
  {
     return this._http.get<any>(this.BaseUrl+"api/Values")
  
     
  }

}
