import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmembreComponent } from './editmembre.component';

describe('EditmembreComponent', () => {
  let component: EditmembreComponent;
  let fixture: ComponentFixture<EditmembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
