import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparmentListComponent } from './deparment-list/deparment-list.component';
import { EmployeeeListComponent } from './employeee-list/employeee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [
  //default route 
  {
     path : '', redirectTo : '/departments' , pathMatch : 'full'
  },
  {
    path : 'departments' , component : DeparmentListComponent
  },
  {
    path : 'departments/:id' , component : DepartmentDetailComponent
  },
  {
    path : 'employees' , component : EmployeeeListComponent
  },
  {
    path : "*" , component : PageNotFoundComponent // wildcard route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DeparmentListComponent , EmployeeeListComponent 
  , PageNotFoundComponent
  , DepartmentDetailComponent]
