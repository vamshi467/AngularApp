import { Component, OnInit } from '@angular/core';

// [] for proptery binding which means dataflow from class to template
// () for event binding which meand dataflow from template to class
@Component({
  selector: 'app-two-way-binding',
  template: `
  <input [(ngModel)] = "name" type = "text" >
  {{name}}
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  public name = ""
  constructor() { }

  ngOnInit(): void {
  }

}

