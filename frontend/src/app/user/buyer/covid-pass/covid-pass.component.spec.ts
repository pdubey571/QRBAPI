import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidPassComponent } from './covid-pass.component';

describe('CovidPassComponent', () => {
  let component: CovidPassComponent;
  let fixture: ComponentFixture<CovidPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
