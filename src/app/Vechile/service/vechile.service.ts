import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse }  from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vechile } from '../model/Vechile';


@Injectable({
  providedIn: 'root'
})
export class VechileService {

  public BaseUrl="http://localhost:63611/";
  constructor(private _http:HttpClient) { }


  getVechilelist():Observable<Vechile>
  {
     return this._http.get<Vechile>(this.BaseUrl+"api/Values/GetVechileList")
  
     
  }

}
