import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPinComponent } from './verify-pin.component';

describe('VerifyPinComponent', () => {
  let component: VerifyPinComponent;
  let fixture: ComponentFixture<VerifyPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
