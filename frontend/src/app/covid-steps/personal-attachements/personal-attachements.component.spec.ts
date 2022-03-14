import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAttachementsComponent } from './personal-attachements.component';

describe('PersonalAttachementsComponent', () => {
  let component: PersonalAttachementsComponent;
  let fixture: ComponentFixture<PersonalAttachementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAttachementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAttachementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
