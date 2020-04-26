import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeListComponent } from './employeee-list.component';

describe('EmployeeeListComponent', () => {
  let component: EmployeeeListComponent;
  let fixture: ComponentFixture<EmployeeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
