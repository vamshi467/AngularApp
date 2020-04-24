import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  <h2> 
  Welcome {{nameFromParent}} // this is called interpolation
  </h2>
  <button (click) = "fireEvent()"> Send event</button>
  <input #myInput type = "text">
  <button (click) = "logMessage(myInput.value)" > Log </button>
  <h2>{{greetUser()}}</h2>
  <h2 class = "text-success">{{name}}</h2>
  <h2 [class.text-danger] = "hasError">{{name}}</h2>
  <h2 [style.color] = "hasError ? 'red' : 'green'">Style Binding </h2>
  <input [id] = "myId" type = "text" value = "Vamshi">
  <h2 [ngClass] = "messageClass" > Vamshi ng Class </h2>
  <input [disabled] = "isDisabled" type = "text" value = "Vamshi">
  <button (click) = "onClick($event)" > Greet </button>
  <button (click) = "greeting = 'Welcome Vishwas'" > Greet1 </button>
  `,
  styles: [ `
  
  .text-success {
    color : green
  }

  .text-danger {
    color : red
  }
  .text-special {
    font-style : italic
  }
  `]
})
export class TestComponent implements OnInit {

  @Input('parentData') public nameFromParent 
  @Output() public childEvent = new EventEmitter();
  public name = "Vamshi"
  public siteUrl = window.location.href
  public myId = "testID"
  public successClass = "text-success";
  public isDisabled = true
  public hasError = false
  public isSpecial = true
  public greeting = ""

  public messageClass = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
    console.log(event)
    this.greeting = event.type;
  }

  greetUser(){
    return "Hello "+this.name;
  }

  // we use events to send data from child to parent
  fireEvent(){
    this.childEvent.emit('Hey FireClick');
  }

  logMessage(value){
     console.log(value);
  }

}
