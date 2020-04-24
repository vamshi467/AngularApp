import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployee(){
    return [
      {"id" : 1 , "name" : "Vamshi" , "Age" : 28}
     ,{"id" : 2 , "name" : "Brandon" , "Age" : 30}
     ,{"id" : 3 , "name" : "Patty" , "Age" : 50}
     ,{"id" : 4 , "name" : "Johanna" , "Age" : 65}
     ,{"id" : 5 , "name" : "Carol" , "Age" : 55}
  ];
}
}
