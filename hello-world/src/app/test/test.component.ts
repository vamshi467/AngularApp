import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> 
  Welcome {{name}} // this is called interpolation
  </h2>
  <h2>{{greetUser()}}</h2>
  <input [id] = "myId" type = "text" value = "Vishwas">
  <input [disabled] = "isDisabled" type = "text" value = "Vishwas">
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Vamshi"
  public siteUrl = window.location.href
  public myId = "testID"
  public isDisabled = true
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello "+this.name;
  }

}
