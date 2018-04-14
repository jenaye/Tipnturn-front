import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingUsersComponent } from './listing-users.component';

describe('ListingUsersComponent', () => {
  let component: ListingUsersComponent;
  let fixture: ComponentFixture<ListingUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
