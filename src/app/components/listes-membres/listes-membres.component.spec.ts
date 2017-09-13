import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesMembresComponent } from './listes-membres.component';

describe('ListesMembresComponent', () => {
  let component: ListesMembresComponent;
  let fixture: ComponentFixture<ListesMembresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesMembresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
