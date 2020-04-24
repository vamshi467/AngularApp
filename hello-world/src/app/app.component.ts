import { Component } from '@angular/core';

// metadata with @Component decorator
@Component({
  selector: 'app-root', // custom HTML tag that can be used to represent component . Angular renders the component in it 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
}

