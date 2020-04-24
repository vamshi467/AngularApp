import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { from } from 'rxjs';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [ // it contains all the modules used by the application
    AppComponent,
    TestComponent,
    TwoWayBindingComponent,
    StructuraldirectivesComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
