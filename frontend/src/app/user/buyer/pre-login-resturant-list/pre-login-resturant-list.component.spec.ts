import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoginResturantListComponent } from './pre-login-resturant-list.component';

describe('PreLoginResturantListComponent', () => {
  let component: PreLoginResturantListComponent;
  let fixture: ComponentFixture<PreLoginResturantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreLoginResturantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoginResturantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
