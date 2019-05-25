import { Component, OnInit } from '@angular/core';
import { VechileService } from '../../service/vechile.service';
import { callbackify } from 'util';
import { HttpErrorResponse } from '@angular/common/http';
import { Vechile } from '../../model/Vechile';

@Component({
  selector: 'app-vechile-list',
  templateUrl: './vechile-list.component.html',
  styleUrls: ['./vechile-list.component.css']
})
export class VechileListComponent implements OnInit {

  public datalist:Vechile;
  isUnauthorizedError: boolean;

  constructor(private _vechileservice:VechileService) { }

  ngOnInit() {
    debugger;
    this.getData();
  }


   getData()
   {
    this._vechileservice.getVechilelist().subscribe(res=>{
      this.datalist=res;
      
    },
    (err:HttpErrorResponse)=>{
      this.isUnauthorizedError=true;
    }); 

   }
}
