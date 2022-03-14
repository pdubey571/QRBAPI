import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashFiveComponent } from './splash-five.component';

describe('SplashFiveComponent', () => {
  let component: SplashFiveComponent;
  let fixture: ComponentFixture<SplashFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
