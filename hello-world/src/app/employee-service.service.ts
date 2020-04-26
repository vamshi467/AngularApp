import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {IEmployee} from './employee'
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private _url : string = "https://jsonplaceholder.typicode.com/users"
  constructor(private http : HttpClient) { }

  getEmployee() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

  // errorHandler(error : HttpErrorResponse){
  //   return Observable.throw(error.message || "Server Error")
  // }
  // getEmployee(){
  //   return [
  //     {"id" : 1 , "name" : "Vamshi" , "Age" : 2}
  //    ,{"id" : 2 , "name" : "Brandon" , "Age" : 30}
  //    ,{"id" : 3 , "name" : "Patty" , "Age" : 50}
  //    ,{"id" : 4 , "name" : "Johanna" , "Age" : 65}
  //    ,{"id" : 5 , "name" : "Carol" , "Age" : 55}
  // ];
}

