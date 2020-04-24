import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  template : `
  <div *ngIf = "isVisible; then thenBlock ; else elseBlock " > </div>
    <ng-template #thenBlock> 
        <h2>Code Evolution directives</h2> 
    </ng-template>

    <ng-template #elseBlock> 
      <h2> Hidden   </h2> 
    </ng-template>

    <div [ngSwitch] = "color">
    <div *ngSwitchCase = "'red'" > You picked red color </div>
    <div *ngSwitchCase = "'blue'" > You picked blue color </div>
    <div *ngSwitchCase = "'green'" > You picked green color </div>
    <div *ngSwitchDefault > Pick the color again </div>

     <div *ngFor = "let color of colors ; first as f ">
     <h2> {{f}}{{color}}</h2>
     </div>

  ` ,

  // template : `
  // <h2 *ngIf = "isVisible"; else elseBlock> 
  // Vamshi Structural Directives test 
  // </h2>
  // <ng-template #elseBlock>
  // <h2> 
  //   Name is hidden
  // </h2>
  // </ng-template>
  // `,
  styles : []
})
export class StructuraldirectivesComponent implements OnInit {

  public isVisible = false
  public color = "blue"
  public colors = ["red","blue","green","yellow"]
  constructor() { }

  ngOnInit(): void {
  }

}
