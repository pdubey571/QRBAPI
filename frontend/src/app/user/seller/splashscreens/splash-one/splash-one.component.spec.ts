import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashOneComponent } from './splash-one.component';

describe('SplashOneComponent', () => {
  let component: SplashOneComponent;
  let fixture: ComponentFixture<SplashOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
