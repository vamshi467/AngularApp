import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

// this @Component decorator checks if there are any dependencies
@Component({
  selector: 'app-employeelist',
  template: `
  <h3> Employee List</h3>
  <ul *ngFor = "let emp of employees" >
      <li> {{emp.name}}</li>  
  </ul>
  `,
  styles : []
})
export class EmployeelistComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService : EmployeeServiceService) { 
  }

  // this hook is called once the component has been initialized
  ngOnInit(): void {
     this.employees = this._employeeService.getEmployee();
  }

}
