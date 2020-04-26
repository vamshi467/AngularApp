import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuraldirectivesComponent } from './structuraldirectives.component';

describe('StructuraldirectivesComponent', () => {
  let component: StructuraldirectivesComponent;
  let fixture: ComponentFixture<StructuraldirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuraldirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuraldirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
