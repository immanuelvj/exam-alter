import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyScheduleComponent } from './faculty-schedule.component';

describe('FacultyScheduleComponent', () => {
  let component: FacultyScheduleComponent;
  let fixture: ComponentFixture<FacultyScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
