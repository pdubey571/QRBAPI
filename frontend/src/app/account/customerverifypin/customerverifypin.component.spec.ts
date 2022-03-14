import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerverifypinComponent } from './customerverifypin.component';

describe('CustomerverifypinComponent', () => {
  let component: CustomerverifypinComponent;
  let fixture: ComponentFixture<CustomerverifypinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerverifypinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerverifypinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
