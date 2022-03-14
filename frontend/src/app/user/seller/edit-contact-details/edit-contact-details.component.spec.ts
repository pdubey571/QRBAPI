import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactDetailsComponent } from './edit-contact-details.component';

describe('EditContactDetailsComponent', () => {
  let component: EditContactDetailsComponent;
  let fixture: ComponentFixture<EditContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
