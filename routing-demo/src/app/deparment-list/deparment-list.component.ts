import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router , ParamMap} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-deparment-list',
  template: `
      <h4> Departments list</h4>
      <ul class = "items">
           <li (click) = "onSelect(department)" *ngFor = "let department of departments">
                <span class = "badge" > {{department.id}}</span> {{department.name}}
            </li>
       </ul>     
  `,
  styles: [
  ]
})
export class DeparmentListComponent implements OnInit {

   public departments = [
      { "id" : 1 , "name" : "Angular"}
      , { "id" : 2 , "name" : "Node"}
      , { "id" : 3 , "name" : "MongoDB"}

  ]
  public selecteId ;

  onSelect(deparment){
    this.router.navigate(['/departments',deparment.id])
  }
  constructor(private router : Router , private route : ActivatedRoute)  {
    
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selecteId = id;
    } ); 
  }

  isSelected(deparment){
     return deparment.id = this.selecteId
  }

}
