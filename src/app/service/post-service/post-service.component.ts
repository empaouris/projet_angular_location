import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../models/Car.model.js';

@Injectable({
  providedIn: 'root'
})

export class PostServiceComponent {
  
  constructor(private _httpclient:HttpClient){}

  getOneModel(modeId:number):Observable<Car>{
    return this._httpclient.get<Car>("http://localhost:3000/car")

  }
  getAllModel(nameMark:string):Observable<Car[]>{
    return this._httpclient.get<Car[]>("http://localhost:3000/car")
    }
  
  PostOneModel(nameMark:string){
      return this._httpclient.post<void>("http:/model",nameMark)
    }
  

}
