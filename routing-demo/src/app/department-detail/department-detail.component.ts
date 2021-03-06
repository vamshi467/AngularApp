import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router , ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You have selected department with id = {{departmentId}}</h3>
    <p>
       <button (click) = "showOverview()">Overview </button>
       <button (click) = "showContact()">Contact </button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click) = "goPrevious()">Previous</button>
    <button (click) = "goNext()">Next</button>
    </p>
    <div>
       <button (click) = "goToDepartment()"> Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route : ActivatedRoute
    , private router : Router) { }

  ngOnInit(): void {

    //this tracks even if we navigate to the same component
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    } ); 

    //reading route params
    // paramMap - this is from the paramAPI to read from the required parameter
    // when we navigate to the same component snapshot approach doesn't work
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['departments', previousId])
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments',nextId])
  }
  goToDepartment(){
    let selectedID = this.departmentId ? this.departmentId : null ;
    this.router.navigate(['/departments',{id: selectedID}])
  }
   
  showOverview(){
    this.router.navigate(['overview'], {relativeTo : this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo : this.route})
  }

}
