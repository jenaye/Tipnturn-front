import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOptionComponent } from './task-option.component';

describe('TaskOptionComponent', () => {
  let component: TaskOptionComponent;
  let fixture: ComponentFixture<TaskOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
