import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashTwoComponent } from './splash-two.component';

describe('SplashTwoComponent', () => {
  let component: SplashTwoComponent;
  let fixture: ComponentFixture<SplashTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
