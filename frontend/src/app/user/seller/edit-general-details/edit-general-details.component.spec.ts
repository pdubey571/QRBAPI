import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneralDetailsComponent } from './edit-general-details.component';

describe('EditGeneralDetailsComponent', () => {
  let component: EditGeneralDetailsComponent;
  let fixture: ComponentFixture<EditGeneralDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGeneralDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
