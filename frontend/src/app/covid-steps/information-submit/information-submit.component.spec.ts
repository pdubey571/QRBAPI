import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSubmitComponent } from './information-submit.component';

describe('InformationSubmitComponent', () => {
  let component: InformationSubmitComponent;
  let fixture: ComponentFixture<InformationSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
