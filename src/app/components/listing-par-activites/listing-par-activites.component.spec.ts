import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingParActivitesComponent } from './listing-par-activites.component';

describe('ListingParActivitesComponent', () => {
  let component: ListingParActivitesComponent;
  let fixture: ComponentFixture<ListingParActivitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingParActivitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingParActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
