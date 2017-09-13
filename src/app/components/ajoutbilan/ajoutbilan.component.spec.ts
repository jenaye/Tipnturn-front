import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutbilanComponent } from './ajoutbilan.component';

describe('AjoutbilanComponent', () => {
  let component: AjoutbilanComponent;
  let fixture: ComponentFixture<AjoutbilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutbilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutbilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
