import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAngularServicesComponent } from './learn-angular-services.component';

describe('LearnAngularServicesComponent', () => {
  let component: LearnAngularServicesComponent;
  let fixture: ComponentFixture<LearnAngularServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnAngularServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnAngularServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
