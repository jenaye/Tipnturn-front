import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutactivitesComponent } from './ajoutactivites.component';

describe('AjoutactivitesComponent', () => {
  let component: AjoutactivitesComponent;
  let fixture: ComponentFixture<AjoutactivitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutactivitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutactivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
