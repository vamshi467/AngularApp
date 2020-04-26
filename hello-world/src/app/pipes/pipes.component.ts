import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template :  `
  <h3>{{name | uppercase}}</h3  >
  <h3>{{name | slice : 3:5}}</h3>
  <h3>{{person | json }}</h3>
  <h4> {{ 5.678 | number: '1.2-3'}}</h4>
  <h4> {{ 5.678 | number: '3.4-5'}}</h4>
  <h4> {{ 5.678 | number: '3.1-2'}}</h4>
  <h5> {{0.25 | currency }}</h5>
  <h6> {{date | date : 'shortDate'}}</h6>
  `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "PipesTtest";
  public message = "Welcome to PipesTest";
  public date = new Date();
  public person = {
           "firstName" : "John",
           "lastName" : "Tucker"

  }
  constructor() { }

  ngOnInit(): void {
  }

}
