import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmembreComponent } from './ajoutmembre.component';

describe('AjoutmembreComponent', () => {
  let component: AjoutmembreComponent;
  let fixture: ComponentFixture<AjoutmembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutmembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutmembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
